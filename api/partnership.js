export default $axios => ({
  fromInvestors(data) {
    return $axios.post('/partnership/from-investors', data)
  },
  sendTestAnswers(data) {
    return $axios.post('/partnership/send-test-answers', data)
  },
})