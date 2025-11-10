import axios from 'axios';
import { getToken, clearForLogout } from '@/utils/auth';
import { getItem, setItem } from '@/utils/storage'
import store from '@/store';
import router from '@/router';
import { errorsAlert, netwokErrorAlert } from './requestAlerts';

const service = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, 
  timeout: 60000 // request timeout
});

function getUserIndex() {
  let index = getItem('user_index');
  if(!index){
    index = Math.ceil(Math.random() * (99999999999999999999 - 10000000000000000000) + 10000000000000000000);
    setItem('user_index', index);
  }
  return index;
}

service.interceptors.request.use(
  config => {
    loaderIncrease(config);
    let token = getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['X-USER-INDEX'] = getUserIndex();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    loaderDecrease(response.config);
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    loaderDecrease(error.config);
    if (error.response && (error.response.status == 401)) {
      if(error.response && error.response['data'] && error.response['data']['message'] && error.response['data']['message'] != "Unauthenticated."){
        errorsAlert(error.response);
      }
      logout();
    }else if(error.response){
      errorsAlert(error.response);
    }else{
      netwokErrorAlert(error);
    }
    return Promise.reject(error.response);
  }
);

function logout() {
  clearForLogout();
  if (router.currentRoute.name != 'ForeignLogin') {
    return router.push({ name: 'Login' });
  }
}


const notLoader = [
  // '/classifiers/skills',
];
function loaderIncrease(config) {
  if (notLoader.indexOf(config['url']) < 0) {
    store.dispatch('loader/increase');
  }
}
function loaderDecrease(config) {
  if (notLoader.indexOf(config['url']) < 0) {
    store.dispatch('loader/decrease');
  }
}

export default service;
