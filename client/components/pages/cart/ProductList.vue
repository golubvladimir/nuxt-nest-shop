<template>
  <div class="product-list">
    <ProductItem
      class="product-list__item"
      v-for="product in products"
      :name="product.name"
      :qnt="product.qnt"
      :price="product.price"
    />
  </div>
</template>

<script>
  import ProductItem from '@/components/pages/cart/ProductItem';

  export default {
    name: "ProductList",
    props: {
      products: Array
    },
    components: {
      ProductItem
    }
  }
</script>

<style scoped>

</style>
