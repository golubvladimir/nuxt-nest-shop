<template>
  <nuxt-link
    class="link"
    :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
  export default {
    name: "Link",
    props: {
      to: String
    }
  }
</script>

<style lang="scss" scoped>
  .link {
    text-decoration: none;
    color: #000;

    &:hover {
      color: #007bff;
    }
  }
</style>
