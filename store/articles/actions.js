export const actions = {
  list({ commit }, params) {
    return this.$requests.articles.list(params);
  },
  create({ commit },data) {
    return this.$requests.articles.create(data);
  },
  update({ commit },data) {
    return this.$requests.articles.update(data);
  },
  destroy({ commit },id) {
    return this.$requests.articles.destroy(id);
  },
  show({ commit },id) {
    return this.$requests.articles.show(id);
  },
  publisheds({ commit },params) {
    return this.$requests.articles.publisheds(params);
  },
  bySlug({ commit },slug) {
    return this.$requests.articles.bySlug(slug);
  },
};
