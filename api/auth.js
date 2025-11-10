export default $axios => ({
  login(data) {
    return $axios.post('/auth/login', data)
  },
  register(data) {
    return $axios.post('/auth/register', data)
  },
  currentUser(token) {
    return $axios.post('/auth/get-info')
  },
  logout() {
    return $axios.post('/auth/logout')
  },
  updateProfile(data) {
    return $axios.post('/users/change-fullname', data)
  },
  changePassword(data) {
    return $axios.post('/users/change-password', data)
  },
  cardVerify(data) {
    return $axios.post('/applications/card-verify', data)
  },
  resetPassword(data) {
    return $axios.post('/users/reset-password', data)
  },
  verifyCode(data) {
    return $axios.post('/users/verify-code', data)
  },
  resetWithToken(data) {
    return $axios.post('/users/reset-with-token', data)
  },
  sociallogin(provider, data){
    return $axios.post(`/auth/sociallogin/${provider}`, data)
  },
  sendCode(data){
    return $axios.post(`/auth/send-code`, data)
  }
})