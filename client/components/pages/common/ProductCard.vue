<template>
  <div class="product-card">
    <img
      class="product-card__img"
      :src="src"
      :name="name"
    >
    <p class="product-card__name">{{ name }}</p>
    <p class="product-card__price">{{ price }} $</p>
    <Button
      class="product-card__btn"
      level="primary"
    >Add to card</Button>
  </div>
</template>

<script>
  import Button from '@/components/elements/Button';

  export default {
    name: "ProductCard",
    components: {
      Button
    },
    props: {
      name: String,
      src: String,
      description: String,
      price: Number
    }
  }
</script>

<style lang="scss" scoped>
  .product-card {
    &__img {
      width: 100%;
      margin-bottom: 10px;
    }

    &__name {
      font-size: 18px;
      margin-bottom: 10px;
    }

    &__price {
      font-size: 16px;
      margin-bottom: 20px;
    }

    &__btn {
      width: 100%;
    }
  }
</style>
