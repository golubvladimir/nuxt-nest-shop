<template>
  <h1
    v-if="size === '1'"
    class="title"
  >
    <slot />
  </h1>
  <h2
    v-else-if="size === '2'"
    class="title"
  >
    <slot />
  </h2>
  <h3
    v-else-if="size === '3'"
    class="title"
  >
    <slot />
  </h3>
  <h4
    v-else-if="size === '4'"
    class="title"
  >
    <slot />
  </h4>
  <h5
    v-else-if="size === '5'"
    class="title"
  >
    <slot />
  </h5>
  <h6
    v-else-if="size === '6'"
    class="title"
  >
    <slot />
  </h6>
</template>

<script>
  export default {
    name: "Title",
    props: {
      size: String
    }
  }
</script>

<style scoped>

</style>
