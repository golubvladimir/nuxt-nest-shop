<template>
  <div>
    <Container>
      <Row>
        <Column size="12">
          <p>© NuxtJS NestJS shop</p>
        </Column>
      </Row>
    </Container>
  </div>
</template>

<script>
  import Container from '@/components/grid/Container';
  import Row from '@/components/grid/Row';
  import Column from '@/components/grid/Column';

  export default {
    name: "Footer",
    components: {
      Container,
      Row,
      Column
    }
  }
</script>

<style scoped>

</style>
