<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md center-in-container">
      <div class="q-pa-md">
        <div
          class="inset-shadow flex inline shadow-box flex-center doc-inset-shadow rounded-borders"
        >
          <!-- scrolling writer -->
          <card-haiku-writer />
          <!-- /scrolling writer -->
        </div>
        <card-action-buttons />
        <div>
          <h4>Instructions:</h4>
          <p>Fill out the form and make a card!</p>
        </div>
      </div>
      <!-- card form -->
      <card-create-form />
      <!-- /card form -->
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    'card-haiku-writer': () =>
      import('components/CatalogCards/CardHaikuWriter.vue').then(
        m => m.default
      ),
    'card-create-form': () =>
      import('components/CatalogCards/CardCreateForm.vue').then(m => m.default),
    'card-action-buttons': () =>
      import('components/CatalogCards/CardActionButtons.vue').then(
        m => m.default
      ),
  },
};
</script>

<style lang="scss" scoped>
.shadow-box {
  padding: 10px;
  background-color: #fff;
}

.center-in-container {
  display: flex;
  justify-content: center;
}

.my-card {
  width: 100%;
  max-width: 550px;
}
</style>
