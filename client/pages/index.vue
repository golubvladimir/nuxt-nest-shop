<template>
  <div class="main-page">
    <Container>
      <Row>
        <Column size="12">
          <Title
            size="1"
            class="main-page__title"
          >New products</Title>
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
  import Title from '@/components/elements/Title';
  import ProductsList from '@/components/pages/common/ProductList';

  export default {
    name: 'main-page',
    components: {
      Container,
      Row,
      Column,
      Title,
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

<style lang="scss" scoped>
  .main-page {

    &__title {
      margin-bottom: 20px;
    }
  }
</style>
