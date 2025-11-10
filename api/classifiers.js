export default $axios => ({
  countries() {
    return $axios.get('/classifiers/countries')
  },
})