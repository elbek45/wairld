export const actions = {
  list({ commit }) {
    return this.$requests.menu.list();
  },
  show({ commit },id) {
    return this.$requests.menu.show(id);
  },
  create({ commit },data) {
    return this.$requests.menu.create(data);
  },
  update({ commit },data) {
    return this.$requests.menu.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.menu.destroy(id);
  },
};
