export const actions = {
  list({ commit }, params) {
    return this.$requests.products.list(params);
  },
  create({ commit },data) {
    return this.$requests.products.create(data);
  },
  update({ commit },data) {
    return this.$requests.products.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.products.destroy(id);
  },
  show({ commit },id) {
    return this.$requests.products.show(id);
  },
  listItems({ commit },key) {
    return this.$requests.products.listItems(key);
  },
  publisheds({ commit },params) {
    return this.$requests.products.publisheds(params);
  },
  byCreatorId({ commit },params) {
    return this.$requests.products.byCreatorId(params);
  },
  shortList({ commit }) {
    return this.$requests.products.shortList();
  },
};
