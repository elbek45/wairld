export const actions = {
  list({ commit }) {
    return this.$requests.textBlocks.list();
  },
  getByKey({ commit },key) {
    return this.$requests.textBlocks.getByKey(key);
  },
  create({ commit },data) {
    return this.$requests.textBlocks.create(data);
  },
  update({ commit },data) {
    return this.$requests.textBlocks.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.textBlocks.destroy(id);
  },
};
