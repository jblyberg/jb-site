<template>
  <default-page-container>
    <q-page class="catalog-card-page">
      <div class="row">
        <div class="col-6">
          <div class="q-pa-md">
            <div
              class="inset-shadow flex inline shadow-box flex-center doc-inset-shadow rounded-borders"
            >
              <card-image-block />
            </div>
            <span class="desktop-buttons-row">
              <card-action-buttons />
            </span>
            <card-instructions />
          </div>
        </div>
        <div class="col">
          <div>
            <h3>Create a Catalog Card!</h3>
            <card-create-form />
          </div>
        </div>
      </div>
    </q-page>
  </default-page-container>
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
.catalog-card-page {
  margin-top: 50px;
}

.shadow-box {
  padding: 10px;
  background-color: #fff;
}

.desktop-card-create-form {
  margin-left: 30px;
  padding-top: 10px;
}
</style>
