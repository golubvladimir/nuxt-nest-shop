export const state = () => ({
  products: [],
  categories: [],
  page: 0,
  perPage: 8,
  total: 0,
  totalPage: 0
});

export const getters = {
  getProducts: state => state.products,
  getCategories: state => state.categories
};

export const mutations = {
  setProducts: (state, products) => state.products = products,
  setTotal: (state, total) => state.total = total,
  setTotalPage: (state, totalPage) => state.totalPage = totalPage,
  setCategories: (state, categories) => state.categories = categories
};

export const actions = {
  async getProducts({ commit, state }) {
    const result = await this.$axios.$get('api/products', {
      params: {
        page: state.page,
        perPage: state.perPage
      }
    });

    commit('setProducts', result.products);
    commit('setTotal', result.total);
    commit('setTotalPage');
  },
  async getCategories({ commit }) {
    const categories = await this.$axios.$get('api/categories');
    
    commit('setCategories', categories);
  },
  async getProductsMain({ commit }) {
    const result = await this.$axios.$get('api/products', {
      params: {
        page: 0,
        perPage: 4
      }
    });

    commit('setProducts', result.products);
  }

};
