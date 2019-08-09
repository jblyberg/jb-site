<template>
  <q-page id="CatalogCard">
    <card-layout-desktop v-if="this.$q.platform.is.desktop" />
    <card-layout-mobile v-else />
  </q-page>
</template>

<script>
export default {
  components: {
    'card-layout-desktop': () =>
      import('components/CatalogCards/CardLayoutDesktop.vue').then(
        m => m.default
      ),
    'card-layout-mobile': () =>
      import('components/CatalogCards/CardLayoutMobile.vue').then(
        m => m.default
      ),
  },
};
</script>

<style lang="scss" scoped></style>
