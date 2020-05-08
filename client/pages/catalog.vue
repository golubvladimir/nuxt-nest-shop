<template>
  <div class="catalog-page">
    <Container>
      <Row>
        <Column size="12">
          <Title
            class="catalog-page__title"
            size="1"
          >Catalog</Title>
        </Column>
      </Row>
      <Row>
        <Column size="2">
          <Filter />
        </Column>
        <Column size="10">
          <ProductList
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
  import ProductList from '@/components/pages/common/ProductList';
  import Filter from '@/components/pages/catalog/Filter';

  export default {
    name: "catalog",
    components: {
      Container,
      Row,
      Column,
      Title,
      ProductList,
      Filter
    },
    middleware: ['pages/catalog'],
    computed: {
      ...mapGetters({
        products: 'products/getProducts'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-page {

    &__title {
      margin-bottom: 20px;
    }
  }
</style>
