export default $axios => ({
  list() {
    return $axios.get('/pages')
  },
  bySlug(slug) {
    return $axios.get('/pages/by-slug/'+slug)
  },
  show(id) {
    return $axios.get('/pages/show/'+id)
  },
  create(data) {
    return $axios.post('/pages', data)
  },
  update(data) {
    return $axios.put('/pages/update/'+data['id'], data)
  },
  destroy(id) {
    return $axios.delete('/pages/'+id)
  },
})