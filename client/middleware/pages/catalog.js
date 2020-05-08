export default async function ({ store }) {
  if (!store.state.products.products.length) {
    await store.dispatch('products/getProducts');
  }

  if (!store.state.products.categories.length) {
    await store.dispatch('products/getCategories');
  }
}
