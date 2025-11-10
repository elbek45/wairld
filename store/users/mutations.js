export const mutations = {
  SET_LIST: (state, data) => {
    state.list = data['data'];
    state.pagination = {
      total: data['total'],
      last_page: data['last_page'],
      page: data['current_page'],
      limit: data['per_page'],
      startIndex: ((data['current_page']-1)*data['per_page']),
    }
  },
};