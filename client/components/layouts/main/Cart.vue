<template>
  <div class="cart">
    <Link class="cart__link" to="/cart">
      <img
        class="cart__icon"
        src="~static/icons/cart.svg" alt="Cart"
      />
      <p class="cart__qnt">0</p>
    </Link>
  </div>
</template>

<script>
  import Link from '@/components/elements/Link';

  export default {
    name: "Cart",
    components: {
      Link
    }
  }
</script>

<style lang="scss" scoped>
  .cart {

    &__link {
      display: flex;
    }

    &__icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
</style>
