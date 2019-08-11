<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-7 col-md-6">
        <div class="row justify-around">
          <div class="inset-shadow shadow-box doc-inset-shadow rounded-borders">
            <card-image-block />
          </div>
        </div>
        <div class="row justify-around">
          <span class="desktop-buttons-row">
            <card-action-buttons />
          </span>
        </div>
        <div class="row justify-around">
          <div class="col-11">
            <card-instructions />
          </div>
        </div>
      </div>
      <div class="col-7 col-md-6">
        <div class="row justify-around">
          <div class="col-10">
            <h3>Create a Catalog Card!</h3>
            <card-create-form />
          </div>
        </div>
      </div>
    </div>
  </q-page>
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
</style>
