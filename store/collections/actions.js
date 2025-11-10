export const actions = {
  list({ commit }) {
    return this.$requests.collections.list();
  },
  create({ commit },data) {
    return this.$requests.collections.create(data);
  },
  update({ commit },data) {
    return this.$requests.collections.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.collections.destroy(id);
  },
};
