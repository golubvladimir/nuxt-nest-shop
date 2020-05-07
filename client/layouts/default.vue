<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/common/Header';
  import Footer from '@/components/common/Footer';

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
