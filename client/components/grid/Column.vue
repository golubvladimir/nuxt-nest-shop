<template>
  <div class="column">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Col"
  }
</script>

<style scoped lang="scss">
  .column {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
  }
</style>
