<template>
  <div class="product-list">
    <ProductCard
      class="product-list__item"
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :src="baseURL + product.photos[0].src"
      :description="product.description"
      :price="product.price"
    />
  </div>
</template>

<script>
  import ProductCard from '@/components/pages/main/ProductCard'

  export default {
    name: "ProductList",
    components: {
      ProductCard
    },
    props: {
      products: Array
    },
    computed: {
      baseURL: function() {
        return this.$axios.defaults.baseURL;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .product-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__item {
      width: 21%;
      margin-bottom: 40px;
    }
  }
</style>
