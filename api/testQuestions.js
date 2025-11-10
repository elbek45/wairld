export default $axios => ({
  list() {
    return $axios.get('/test-questions')
  },
  create(data) {
    return $axios.post('/test-questions', data)
  },
  update(data) {
    return $axios.put('/test-questions/update/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/test-questions/'+id)
  },
  show(id) {
    return $axios.get('/test-questions/'+id)
  },
})