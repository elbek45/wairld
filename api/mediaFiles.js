export default $axios => ({
  list() {
    return $axios.get('/media-files')
  },
  getByKey(key) {
    return $axios.get('/media-files/get-by-key/'+key)
  },
  create(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if(Array.isArray(data[key])){
        data[key].forEach(child => {
          formData.append(`${key}[]`, child);
        });
      }else{
        if(typeof data[key] == 'object' && key != 'file'){
          Object.keys(data[key]).forEach(chKey => {
            formData.append(`${key}[${chKey}]`, data[key][chKey]);
          })
        }else{
          formData.append(key, data[key]);
        }
      }
    })
    return $axios.post('/media-files', formData)
  },
  update(data) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    Object.keys(data).forEach(key => {
      if(data[key]){
        if(Array.isArray(data[key])){
          data[key].forEach(child => {
            formData.append(`${key}[]`, child);
          });
        }else{
          if(typeof data[key] == 'object' && key != 'file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/media-files/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/media-files/'+id)
  },
  storeContentImage(data) {
    const formData = new FormData();
    formData.append(`file`, data['file']);
    return $axios.post('/media-files/store-content-image', formData);
  },
})