export default $axios => ({
  list() {
    return $axios.get('/brands')
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
          if(typeof data[key] == 'object' && key != 'logo_file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/brands', formData)
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
          if(typeof data[key] == 'object' && key != 'logo_file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/brands/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/brands/'+id)
  },
})