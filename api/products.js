export default $axios => ({
  list(params) {
    return $axios.get('/products', {params})
  },
  show(id) {
    return $axios.get('/products/'+id)
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
    // Object.keys(data).forEach(key => {
    //   if(data[key]){
    //     if(Array.isArray(data[key])){
    //       data[key].forEach(child => {
    //         formData.append(`${key}[]`, child);
    //       });
    //     }else{
    //       if(typeof data[key] == 'object' && (key != 'image_file' && key != 'object3d_file')){
    //         Object.keys(data[key]).forEach(chKey => {
    //           formData.append(`${key}[${chKey}]`, data[key][chKey]);
    //         })
    //       }else{
    //         formData.append(key, data[key]);
    //       }
    //     }
    //   }
    // })
    return $axios.post('/products', formData)
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
    // Object.keys(data).forEach(key => {
    //   if(data[key]){
    //     if(Array.isArray(data[key])){
    //       data[key].forEach(child => {
    //         formData.append(`${key}[]`, child);
    //       });
    //     }else{
    //       if(typeof data[key] == 'object' && (key != 'image_file' && key != 'object3d_file')){
    //         Object.keys(data[key]).forEach(chKey => {
    //           formData.append(`${key}[${chKey}]`, data[key][chKey]);
    //         })
    //       }else{
    //         formData.append(key, data[key]);
    //       }
    //     }
    //   }
    // })
    return $axios.post('/products/update/'+data['id'], formData)
  },
  destroy(id) {
    return $axios.delete('/products/'+id)
  },
  listItems(key) {
    return $axios.get('/products/list-items/'+key)
  },
  publisheds(params) {
    return $axios.get('/products/publisheds/list', params)
  },
  byCreatorId(params) {
    return $axios.get('/products/by-creator/'+params['id'], params)
  },
  shortList() {
    return $axios.get('/products/short/list')
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