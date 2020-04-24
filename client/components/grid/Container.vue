<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Container"
  }
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    max-width: 1140px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
