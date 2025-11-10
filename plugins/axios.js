import { clearForLogout } from '~/utils/auth';
import { errorsAlert, netwokErrorAlert } from '~/utils/requestAlerts';

export default function ({ app, $axios, error: nuxtError }) {
  $axios.setBaseURL(process.env.VUE_APP_API_BASE_URL);
  
  $axios.onRequest(config => {
    loaderIncrease(app.store, config);
    const token = app.$storage.getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer '+token;
    }
    return config;
  });
  
  $axios.onResponse(response => {
    loaderDecrease(app.store, response.config);
    return response.data;
  });
  
  $axios.onError(error => {
    loaderDecrease(app.store, error.config);
    if (error.response && error.response.status == 401) {
      if(error.response && error.response['data'] && error.response['data']['message'] && error.response['data']['message'] != "Unauthenticated."){
        errorsAlert(error.response, app.store);
      }
      clearForLogout();
      let routePath = app.router.currentRoute.path;
      if (routePath != '/login') {
        return app.router.push('/');
      }
    }else if(error.response && error.response.status == 403) {
      clearForLogout();
      let routePath = app.router.currentRoute.path;
      if (routePath != '/login') {
        return app.router.push('/');
      }
    }else{
      if(error.response){
        errorsAlert(error.response, app.store);
      }else{
        netwokErrorAlert(error);
      }
    }
    console.log(error)
    return Promise.reject(error);
  })
}

const notLoader = [
  '/chat-messages',
  '/chat-messages/send',
  '/chat-messages/update-showed',
  '/chats',
  '/classifiers/skills',
  '/classifiers/positions',
];
function loaderIncrease(store, config) {
  if (process.client && config && config['url'] && notLoader.indexOf(config['url']) < 0) {
    store.dispatch('loader/increase');
  }
}
function loaderDecrease(store, config) {
  if (process.client && config && config['url'] && notLoader.indexOf(config['url']) < 0) {
    store.dispatch('loader/decrease');
  }
}