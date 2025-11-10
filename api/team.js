export default $axios => ({
  list() {
    return $axios.get('/teams')
  },
  create(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if(Array.isArray(data[key])){
        data[key].forEach(child => {
          formData.append(`${key}[]`, child);
        });
      }else{
        if(typeof data[key] == 'object' && key != 'photo_file'){
          Object.keys(data[key]).forEach(chKey => {
            formData.append(`${key}[${chKey}]`, data[key][chKey]);
          })
        }else{
          formData.append(key, data[key]);
        }
      }
    })
    return $axios.post('/teams', formData)
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
          if(typeof data[key] == 'object' && key != 'photo_file'){
            Object.keys(data[key]).forEach(chKey => {
              formData.append(`${key}[${chKey}]`, data[key][chKey]);
            })
          }else{
            formData.append(key, data[key]);
          }
        }
      }
    })
    return $axios.post('/teams/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/teams/'+id)
  },
})