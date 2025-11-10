export const actions = {
  update({ commit },data) {
    return this.$requests.members.update(data);
  },
  updatePhoto({ commit },file) {
    return this.$requests.members.updatePhoto(file);
  },
  updateCover({ commit },file) {
    return this.$requests.members.updateCover(file);
  },
  shortList({ commit }) {
    return this.$requests.members.shortList();
  },
};
