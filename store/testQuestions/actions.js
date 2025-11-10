export const actions = {
  list({ commit }) {
    return this.$requests.testQuestions.list();
  },
  create({ commit },data) {
    return this.$requests.testQuestions.create(data);
  },
  update({ commit },data) {
    return this.$requests.testQuestions.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.testQuestions.destroy(id);
  },
  show({ commit },id) {
    return this.$requests.testQuestions.show(id);
  },
};
