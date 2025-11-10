export const actions = {
  list({ commit }) {
    return this.$requests.whitepaper.list();
  },
  create({ commit },data) {
    return this.$requests.whitepaper.create(data);
  },
  update({ commit },data) {
    return this.$requests.whitepaper.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.whitepaper.destroy(id);
  },
  show({ commit },id) {
    return this.$requests.whitepaper.show(id);
  },
};
