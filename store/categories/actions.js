export const actions = {
  list({ commit }) {
    return this.$requests.categories.list();
  },
  create({ commit },data) {
    return this.$requests.categories.create(data);
  },
  update({ commit },data) {
    return this.$requests.categories.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.categories.destroy(id);
  },
};
