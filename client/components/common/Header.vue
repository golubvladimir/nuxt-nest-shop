<template>
  <div class="header-page">
    <Container>
      <Row>
        <Column size="12">
          <div class="header-page__wrap">
            <Menu
              class="header-page__menu"
            />
            <Cart
              class="header-page__cart"
            />
          </div>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
  import Container from '@/components/grid/Container';
  import Row from '@/components/grid/Row';
  import Column from '@/components/grid/Column';
  import Menu from '@/components/common/Menu';
  import Cart from '@/components/common/Cart';

  export default {
    name: "HeaderPage",
    components: {
      Container,
      Row,
      Column,
      Menu,
      Cart
    }
  }
</script>

<style lang="scss" scoped>
  .header-page {

    &__wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #cccccc;
      margin-bottom: 20px;
      padding: 20px 0;
    }

    &__menu {

    }

    &__cart {

    }
  }
</style>
