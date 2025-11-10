export const actions = {
  getCountries({ commit }) {
    return new Promise((resolve, reject) => {
      this.$requests.classifiers.countries()
        .then(res => {
          if (res['success'] && res['data']) {
            commit('SET_COUNTRIES', res['data']);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
};
