export default async function ({ store }) {
  await store.dispatch('products/getAllProducts');

  console.log(store.state);
}
