export const mutations = {
  SET_PLUSE_REQUEST_RUNNING: state => {
    state.requestsRunning++;
  },
  SET_MINUS_REQUEST_RUNNING: state => {
    setTimeout(() => {
      state.requestsRunning--;
    },500)
  }
};
