<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/layouts/main/Header';
  import Footer from '@/components/layouts/main/Footer';

  export default {
    name: 'default-layout',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
</style>
