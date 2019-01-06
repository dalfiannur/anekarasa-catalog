const state = {
  id: 0
}

const mutations = {
  setId (state, id) {
    state.id = id
  }
}

const actions = {
  setId ({ commit }, id) {
    commit('setId', id)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
