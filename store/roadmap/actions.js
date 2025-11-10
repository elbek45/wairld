export const actions = {
  list({ commit }) {
    return this.$requests.roadmap.list();
  },
  create({ commit },data) {
    return this.$requests.roadmap.create(data);
  },
  update({ commit },data) {
    return this.$requests.roadmap.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.roadmap.destroy(id);
  },
};
