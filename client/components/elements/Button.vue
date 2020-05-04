<template>
  <button
    :class="{
      'btn': true,
      [`btn-${ level }`]: level
    }"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      level: String,
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    height: 30px;

    &-primary {
      color: #ffffff;
      background: #007bff;
      text-transform: uppercase;
      border: none;
      border-radius: 5px;
    }
  }
</style>
