export const actions = {
  list({ commit }) {
    return this.$requests.adsBanners.list();
  },
  create({ commit },data) {
    return this.$requests.adsBanners.create(data);
  },
  update({ commit },data) {
    return this.$requests.adsBanners.update(data);
  },
  byPositions({ commit },params) {
    return this.$requests.adsBanners.byPositions(params);
  },
  destroy({ commit },id) {
    return this.$requests.adsBanners.destroy(id);
  },
};
