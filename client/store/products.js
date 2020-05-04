export const state = {
  products: []
};

export const getters = {
  getProducts: state => state.products
};

export const mutations = {
  setProducts: (state, products) => state.products = products
};

export const actions = {
  async getAllProducts({ commit }) {
    const AllProducts = await this.$axios.$get('/products');

    commit('setProducts', AllProducts);
  },
};
