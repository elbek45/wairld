export const mutations = {
  SET_IS_AUTH(state, value) {
    state.is_auth = value?true:false;
  },
  SET_USER(state, user){
    if(user){
      state.user = user;
      state.role_name = user['role'];
    }else{
      state.user = null;
      state.role_name = '';
    }
  },
};