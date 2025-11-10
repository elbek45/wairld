export const actions = {
  fromInvestors({ commit },data) {
    return this.$requests.partnership.fromInvestors(data);
  },
  sendTestAnswers({ commit },data) {
    return this.$requests.partnership.sendTestAnswers(data);
  },
};
