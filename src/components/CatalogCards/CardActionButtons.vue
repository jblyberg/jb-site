<template>
  <div class="q-pa-md q-gutter-sm center-in-container">
    <q-btn
      round
      color="secondary"
      icon="replay"
      :disabled="disabled"
      @click="
        showResetTip = false;
        resetCard();
      "
    >
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        v-model="showResetTip"
      >
        <strong>Reset</strong> (Back to haikus)
      </q-tooltip>
    </q-btn>
    <q-btn round color="primary" icon="save" :disabled="disabled">
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        v-model="showDownloadTip"
      >
        <strong>Save</strong> (Download your card)
      </q-tooltip>
    </q-btn>
    <q-btn round color="accent" icon="share" :disabled="disabled">
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        v-model="showShareTip"
      >
        <strong>Share</strong> (Facebook, twitter, etc)
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      showResetTip: false,
      showDownloadTip: false,
      showShareTip: false,
    };
  },
  computed: {
    ...mapState('catalogCards', ['cardImage']),
    disabled() {
      return this.cardImage === null;
    },
  },
  methods: {
    ...mapActions('catalogCards', ['resetCard']),
  },
};
</script>

<style lang="scss" scoped></style>
