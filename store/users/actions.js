export const actions = {
  list({ commit }, params) {
    return new Promise((resolve, reject) => {
      this.$requests.users.list(params)
        .then(res => {
          if (res['success'] && res['data']) {
            commit('SET_LIST', res['data']);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  update({ commit }, params) {
    return this.$requests.users.update(params);
  },
};
