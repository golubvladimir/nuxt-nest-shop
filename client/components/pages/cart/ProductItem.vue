<template>
  <div class="product-item">
    <img
      class="product-item__img"
      :src="src"
      :alt="name"
    />
    <p class="product-item__name">{{ name }}</p>
    <p class="product-item__qnt">{{ qnt }}</p>
    <p class="product-item__price">{{ price * qnt }}</p>
  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    props: {
      name: String,
      src: String,
      qnt: Number,
      price: Number
    }
  }
</script>

<style lang="scss" scoped>
  .product-item {
    display: flex;
    justify-content: space-between;
  }
</style>
