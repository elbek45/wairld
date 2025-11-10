export default $axios => ({
  list(params) {
    return $axios.get('/users', {params})
  },
  update(params) {
    return $axios.put('/users/'+params['id'], params)
  },
})