<template>
  <div>
    <card-haiku-writer v-if="cardImage == null" />
    <card-rendered v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  components: {
    'card-haiku-writer': () =>
      import('components/CatalogCards/CardHaikuWriter.vue').then(
        m => m.default
      ),
    'card-rendered': () =>
      import('components/CatalogCards/CardRendered.vue').then(m => m.default),
  },
  computed: {
    ...mapState('catalogCards', ['cardImage']),
  },
};
</script>

<style lang="scss" scoped></style>
