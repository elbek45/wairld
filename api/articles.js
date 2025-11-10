export default $axios => ({
  list(params) {
    return $axios.get('/articles', {params})
  },
  show(id) {
    return $axios.get('/articles/show/'+id)
  },
  create(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if(key != 'image_file' && key != 'object3d_file'){
        recursiveCheckObj(key, data[key], formData);
      }else{
        if(data[key]){
          formData.append(key, data[key]);
        }
      }
    })
    return $axios.post('/articles', formData)
  },
  update(data) {
    const formData = new FormData();
    formData.append("_method", "PUT");
    Object.keys(data).forEach(key => {
      if(key != 'image_file' && key != 'object3d_file'){
        recursiveCheckObj(key, data[key], formData);
      }else{
        if(data[key]){
          formData.append(key, data[key]);
        }
      }
    })
    return $axios.post('/articles/update/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/articles/'+id)
  },
  publisheds(params) {
    return $axios.get('/articles/publisheds',params)
  },
  bySlug(slug) {
    return $axios.get('/articles/by-slug/'+slug)
  },
})

function recursiveCheckObj(parentKey, value, formData){
  if(typeof value == 'object'){
    if(Array.isArray(value)){
      if(value.length){
        value.forEach((child, index) => {
          recursiveCheckObj(`${parentKey}[${index}]`, child, formData);
        });
      }else{
        formData.append(parentKey, value);
      }
    }else{
      Object.keys(value || {}).forEach(key => { 
        recursiveCheckObj(parentKey+`[${key}]`, value[key], formData);
      })
    }
  }else{
    formData.append(parentKey, value);
  }
}