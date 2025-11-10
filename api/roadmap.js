export default $axios => ({
  list() {
    return $axios.get('/roadmap')
  },
  create(data) {
    return $axios.post('/roadmap', data)
  },
  update(data) {
    return $axios.put('/roadmap/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/roadmap/'+id)
  },
})