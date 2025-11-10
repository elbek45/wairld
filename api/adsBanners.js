export default $axios => ({
  list() {
    return $axios.get('/ads-banners')
  },
  byPositions(params) {
    return $axios.get('/ads-banners/by-positions', {params})
  },
  create(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if(data[key]){
        if(Array.isArray(data[key])){
          data[key].forEach(child => {
            formData.append(`${key}[]`, child);
          });
        }else{
          if(typeof data[key] == 'object' && key != 'image_file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/ads-banners', formData)
  },
  update(data) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    Object.keys(data).forEach(key => {
      if(data[key] || data[key] === 0){
        if(Array.isArray(data[key])){
          data[key].forEach(child => {
            formData.append(`${key}[]`, child);
          });
        }else{
          if(typeof data[key] == 'object' && key != 'image_file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/ads-banners/update/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/ads-banners/'+id)
  },
})