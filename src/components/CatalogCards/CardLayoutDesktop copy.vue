<template>
  <div class="q-pa-md row items-start q-gutter-md center-in-container">
    <div class="q-pa-md">
      <div
        class="inset-shadow flex inline shadow-box
        flex-center doc-inset-shadow rounded-borders"
      >
        <card-image-block />
      </div>
      <span class="desktop-buttons-row">
        <card-action-buttons />
      </span>
      <card-instructions />
    </div>
    <div class="desktop-card-create-form">
      <h3>Create a Catalog Card!</h3>
      <card-create-form />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    'card-image-block': () =>
      import('components/CatalogCards/CardImageBlock.vue').then(m => m.default),
    'card-create-form': () =>
      import('components/CatalogCards/CardCreateForm.vue').then(m => m.default),
    'card-action-buttons': () =>
      import('components/CatalogCards/CardActionButtons.vue').then(
        m => m.default
      ),
    'card-instructions': () =>
      import('components/CatalogCards/CardInstructions.vue').then(
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

.desktop-card-create-form {
  margin-left: 30px;
  padding-top: 10px;
}
</style>
