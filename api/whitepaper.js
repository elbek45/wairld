export default $axios => ({
  list() {
    return $axios.get('/whitepaper')
  },
  create(data) {
    return $axios.post('/whitepaper', data)
  },
  update(data) {
    return $axios.put('/whitepaper/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/whitepaper/'+id)
  },
  show(id) {
    return $axios.get('/whitepaper/'+id)
  },
})