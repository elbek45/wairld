export const actions = {
  list({ commit }) {
    return this.$requests.brands.list();
  },
  create({ commit },data) {
    return this.$requests.brands.create(data);
  },
  update({ commit },data) {
    return this.$requests.brands.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.brands.destroy(id);
  },
};
