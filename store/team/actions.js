export const actions = {
  list({ commit }) {
    return this.$requests.team.list();
  },
  create({ commit },data) {
    return this.$requests.team.create(data);
  },
  update({ commit },data) {
    return this.$requests.team.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.team.destroy(id);
  },
};
