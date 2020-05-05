export const state = () => {
  card: []
};

export const getters = {
  getCard: state => state.card
};

export const mutations = {
  addToCard: (state, productId) => {
    const index = state.card.findIndex(item => item.id === productId);

    if (index == -1) {
      state.card.push({
        id: productId,
        quantity: 1
      })
    } else {
      state.card[index].quantity++
    }
  }
};
