export const actions = {
  list({ commit }) {
    return this.$requests.pages.list();
  },
  bySlug({ commit },slug) {
    return this.$requests.pages.bySlug(slug);
  },
  show({ commit },id) {
    return this.$requests.pages.show(id);
  },
  create({ commit },data) {
    return this.$requests.pages.create(data);
  },
  update({ commit },data) {
    return this.$requests.pages.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.pages.destroy(id);
  },
};
