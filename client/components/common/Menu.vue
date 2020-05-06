<template>
  <ul class="menu">
    <Link
      class="menu__item"
      v-for="item in items"
      :to="item.to"
    >{{ item.title }}</Link>
  </ul>
</template>

<script>
  import Link from '@/components/elements/Link';

  export default {
    name: "MenuMain",
    data: () => ({
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Catalog',
          to: '/catalog'
        }
      ]
    }),
    components: {
      Link
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    margin: 0;
    padding: 0;

    &__item {
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
