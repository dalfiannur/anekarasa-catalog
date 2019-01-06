const state = {
  products: []
}

const mutations = {
  addProduct (state, product) {
    state.products.push(product)
  },

  removeProduct (state, id) {
    state.products = state.products.filter(item => {
      return item.id !== id
    })
  },

  clearProducts (state) {
    state.products = []
  }
}

const actions = {
  addProduct ({ commit }, product) {
    commit('addProduct', product)
  },

  removeProduct ({ commit }, product) {
    commit('removeProduct', product)
  },

  clearProduct ({ commit }) {
    commit('clearProducts')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
