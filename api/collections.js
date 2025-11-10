export default $axios => ({
  list() {
    return $axios.get('/collections')
  },
  create(data) {
    return $axios.post('/collections', data)
  },
  update(data) {
    return $axios.put('/collections/update/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/collections/'+id)
  },
})