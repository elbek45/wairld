export default $axios => ({
  list() {
    return $axios.get('/wiki')
  },
  create(data) {
    return $axios.post('/wiki', data)
  },
  update(data) {
    return $axios.put('/wiki/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/wiki/'+id)
  },
})