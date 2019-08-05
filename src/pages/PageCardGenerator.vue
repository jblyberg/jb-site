<template>
  <q-page>
    <my-page-container>
      <h3>Card Catalog Generator</h3>
    </my-page-container>
  </q-page>
</template>

<script>
export default {
  components: {
    'my-page-container': () =>
      import('components/MyPageContainer.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped></style>
