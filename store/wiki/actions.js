export const actions = {
  list({ commit }) {
    return this.$requests.wiki.list();
  },
  create({ commit },data) {
    return this.$requests.wiki.create(data);
  },
  update({ commit },data) {
    return this.$requests.wiki.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.wiki.destroy(id);
  },
};
