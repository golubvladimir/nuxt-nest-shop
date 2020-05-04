<template>
  <div class="header-page">
    <Container>
      <Row>
        <Column size="12">
          <Menu
            class="header-page__menu"
          />
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

  export default {
    name: "HeaderPage",
    components: {
      Container,
      Row,
      Column,
      Menu
    }
  }
</script>

<style scoped>

</style>
