export const actions = {
  list({ commit }) {
    return this.$requests.mediaFiles.list();
  },
  getByKey({ commit },key) {
    return this.$requests.mediaFiles.getByKey(key);
  },
  create({ commit },data) {
    return this.$requests.mediaFiles.create(data);
  },
  update({ commit },data) {
    return this.$requests.mediaFiles.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.mediaFiles.destroy(id);
  },
  storeContentImage({ commit },data) {
    return this.$requests.mediaFiles.storeContentImage(data);
  },
};
