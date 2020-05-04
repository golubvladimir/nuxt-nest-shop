<template>
  <div class="main-page">
    <Container>
      <Row>
        <Column size="6">
          <ProductsList
            :products="products"
          />
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  import Container from '@/components/grid/Container';
  import Row from '@/components/grid/Row';
  import Column from '@/components/grid/Column';
  import ProductsList from '@/components/pages/main/ProductList';

  export default {
    name: 'main-page',
    components: {
      Container,
      Row,
      Column,
      ProductsList
    },
    middleware: ['pages/main'],
    computed: {
      ...mapGetters({
        products: 'products/getProducts'
      })
    }
  }
</script>

<style>

</style>
