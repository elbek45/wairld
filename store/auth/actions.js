import { setToken, setTokenTime, clearForLogout } from '@/utils/auth';

export const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$requests.auth.login(data)
        .then(res => {
          if (res['success'] && res['data']) {
            this.$storage.setToken(res['data']['access_token']);
            this.$storage.setItem('access_token_time', res['data']['expires_in']);
            commit('SET_IS_AUTH', res['data']);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$requests.auth.register(data)
        .then(res => {
          if (res['success'] && res['data']) {
            this.$storage.setToken(res['data']['access_token']);
            this.$storage.setItem('access_token_time', res['data']['expires_in']);
            commit('SET_IS_AUTH', res['data']);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  sociallogin({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$requests.auth.sociallogin(data['provider'], data['data'])
        .then(res => {
          if (res['success'] && res['data']) {
            this.$storage.setToken(res['data']['access_token']);
            this.$storage.setItem('access_token_time', res['data']['expires_in']);
            commit('SET_IS_AUTH', res['data']);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      this.$requests.auth.currentUser()
        .then(res => {
          if (res['success'] && res['data']) {
            commit('SET_USER', res['data']);
            commit('SET_IS_AUTH', res['data']);
            this.$storage.setItem('user', res['data'])
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      this.$requests.auth.logout().then(res => {
        clearForLogout();
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  },
  updateProfile({ commit },data) {
    return this.$requests.auth.updateProfile(data);
  },
  changePassword({ commit },data) {
    return this.$requests.auth.changePassword(data);
  },
  sendCode({ commit },data) {
    return this.$requests.auth.sendCode(data);
  },
};
