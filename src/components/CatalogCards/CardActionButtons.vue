<template>
  <div class="q-pa-md q-gutter-sm center-in-container">
    <q-btn round color="secondary" icon="replay" :disabled="disabled">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <strong>Reset</strong> (Back to haikus)
      </q-tooltip>
    </q-btn>
    <q-btn round color="primary" icon="save" :disabled="disabled">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <strong>Save</strong> (Download your card)
      </q-tooltip>
    </q-btn>
    <q-btn round color="accent" icon="share" :disabled="disabled">
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <strong>Share</strong> (Facebook, twitter, etc)
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
