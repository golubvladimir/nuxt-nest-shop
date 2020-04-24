<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Row"
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
</style>
