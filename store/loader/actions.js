export const actions = {
  increase({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_PLUSE_REQUEST_RUNNING');
      resolve(true)
    });
  },
  decrease({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_MINUS_REQUEST_RUNNING');
      resolve(true)
    });
  }
}
