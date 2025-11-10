export default $axios => ({
  list() {
    return $axios.get('/menu')
  },
  show(id) {
    return $axios.get('/menu/show/'+id)
  },
  create(data) {
    return $axios.post('/menu', data)
  },
  update(data) {
    return $axios.put('/menu/update/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/menu/'+id)
  },
})