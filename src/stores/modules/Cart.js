const state = {
  products: []
}

const mutations = {
  addProduct (state, product) {
    state.products.push(product)
  },

  removeProduct (state, product) {
    state.products = state.products.filter(item => {
      return item.id !== product.id
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

  clearProducts ({ commit }) {
    commit('clearProducts')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
