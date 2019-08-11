<template>
  <div class="mobile-card-view">
    <!-- Card image row -->
    <div class="row justify-around inset-shadow mobile-card-row">
      <card-image-block />
    </div>

    <!-- Button row -->
    <div class="row justify-around">
      <card-action-buttons />
    </div>

    <!-- Mobile tabs row -->
    <div class="row justify-around">
      <div class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-pa-md mobile-card-tabs"
          active-color="accent"
          indicator-color="primary"
          narrow-indicator
        >
          <q-tab name="create" label="Create Card" />
          <q-tab name="instructions" label="Instructions" />
        </q-tabs>
      </div>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="create" class="mobile-card-tab-panel">
          <span class="mobile-create-card-form">
            <card-create-form />
          </span>
        </q-tab-panel>

        <q-tab-panel name="instructions" class="mobile-card-tab-panel">
          <card-instructions />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'create',
    };
  },
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
.mobile-card-view {
  margin-top: -76px;
  margin-bottom: 55px;
}

.mobile-card-row {
  background-color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
}

.q-tab-panels.q-panel-parent {
  width: 100%;
}

.mobile-card-tab-panel {
  background-color: #444444;
}
</style>
