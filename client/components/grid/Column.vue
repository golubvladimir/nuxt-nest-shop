<template>
  <div :class="{
    'column': true,
    [`column-${ size }`]: size,
    [`column-offset-${ offset }`]: offset
  }">
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Col",
    props: {
      size: String,
      offset: String
    }
  }
</script>

<style scoped lang="scss">
  .column {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;

    &-offset {
      &-12 {
        margin-left: (100% / 12) * 12;
      }

      &-11 {
        margin-left: (100% / 12) * 11;
      }

      &-10 {
        margin-left: (100% / 12) * 10;
      }

      &-9 {
        margin-left: (100% / 12) * 9;
      }

      &-8 {
        margin-left: (100% / 12) * 8;
      }

      &-7 {
        margin-left: (100% / 12) * 7;
      }

      &-6 {
        margin-left: (100% / 12) * 6;
      }

      &-5 {
        margin-left: (100% / 12) * 5;
      }

      &-4 {
        margin-left: (100% / 12) * 4;
      }

      &-3 {
        margin-left: (100% / 12) * 3;
      }

      &-2 {
        margin-left: (100% / 12) * 2;
      }

      &-1 {
        margin-left: (100% / 12) * 1;
      }
    }

    &-12 {
      width: (100% / 12) * 12;
    }

    &-11 {
      width: (100% / 12) * 11;
    }

    &-10 {
      width: (100% / 12) * 10;
    }

    &-9 {
      width: (100% / 12) * 9;
    }

    &-8 {
      width: (100% / 12) * 8;
    }

    &-7 {
      width: (100% / 12) * 7;
    }

    &-6 {
      width: (100% / 12) * 6;
    }

    &-5 {
      width: (100% / 12) * 5;
    }

    &-4 {
      width: (100% / 12) * 4;
    }

    &-3 {
      width: (100% / 12) * 3;
    }

    &-2 {
      width: (100% / 12) * 2;
    }

    &-1 {
      width: (100% / 12) * 1;
    }
  }
</style>
