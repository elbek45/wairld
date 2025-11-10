export default $axios => ({
  updatePhoto(file) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("photo_file", file);
    return $axios.post('/members/update', formData)
  },
  updateCover(file) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("cover_file", file);
    return $axios.post('/members/update', formData)
  },
  update(data) {
    return $axios.put('/members/update', data)
  },
  shortList() {
    return $axios.get('/members/short/list')
  },
})