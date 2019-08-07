<template>
  <div class="row items-start  center-in-container mobile-card-container">
    <div
      class="inset-shadow flex inline mobile-shadow-box flex-center doc-inset-shadow"
    >
      <card-haiku-writer />
    </div>

    <div>
      <span class="mobile-buttons-row">
        <card-action-buttons />
      </span>

      <!-- Test -->
      <div class="">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-pa-md mobile-card-tabs"
          active-color="accent"
          indicator-color="primary"
          narrow-indicator
          align="center"
          :breakpoint="0"
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
      <!-- Test -->
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
    'card-instructions': () =>
      import('components/CatalogCards/CardInstructions.vue').then(
        m => m.default
      ),
  },
};
</script>

<style lang="scss" scoped>
.mobile-card-container {
  margin-top: -56px;
  padding-bottom: 50px;
}

.mobile-shadow-box {
  $side-padding: 100%;
  padding: 10px $side-padding 10px $side-padding;
  background-color: #fff;
}

.mobile-buttons-row {
  margin-left: 0px;
}

.mobile-create-card-form {
  margin-left: 0px;
}

.mobile-card-tabs {
  margin-bottom: -16px;
  margin-top: -16px;
}

.mobile-card-tab-panel {
  background-color: #444444;
}
</style>
