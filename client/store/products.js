export const state = () => ({
  products: [],
  page: 0,
  perPage: 4,
  total: 0,
  totalPage: 0
});

export const getters = {
  getProducts: state => state.products,
};

export const mutations = {
  setProducts: (state, products) => state.products = products,
  setTotal: (state, total) => state.total = total,
  setTotalPage: (state, totalPage) => state.totalPage = totalPage
};

export const actions = {
  async getProducts({ commit, state }) {
    const products = await this.$axios.$get('api/products', {
      params: {
        page: state.page,
        perPage: state.perPage
      }
    });

    commit('setProducts', products);
  },
  async getProductsMain({ commit }) {
    const result = await this.$axios.$get('api/products', {
      params: {
        page: 0,
        perPage: 4
      }
    });

    commit('setProducts', result.products);
    commit('setTotal', result.total);
    commit('setTotalPage', result.totalPage);
  }

};
