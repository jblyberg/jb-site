<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      round
      color="secondary"
      icon="replay"
      aria-label="Reset Card"
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
    <q-btn
      round
      color="primary"
      icon="save"
      aria-label="Download Card"
      :disabled="disabled"
      @click="downloadCard"
    >
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        v-model="showDownloadTip"
      >
        <strong>Save</strong> (Download your card)
      </q-tooltip>
    </q-btn>
    <q-btn
      round
      color="accent"
      icon="content_copy"
      aria-label="Copy card record link"
      :disabled="disabled"
      v-clipboard:copy="cardUrl"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      <q-tooltip
        anchor="top middle"
        self="bottom middle"
        :offset="[10, 10]"
        v-model="showCopyTip"
      >
        <strong>Copy card record link</strong>
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

export default {
  data() {
    return {
      showResetTip: false,
      showDownloadTip: false,
      showCopyTip: false,
    };
  },
  computed: {
    ...mapState('catalogCards', ['cardId', 'cardImage']),
    disabled() {
      return this.cardImage === null;
    },
    cardUrl() {
      const url = window.location;
      return url.protocol + '//' + url.host + '/card/' + this.cardId;
    },
  },
  methods: {
    ...mapActions('catalogCards', ['resetCard']),
    downloadCard() {
      this.$axios
        .get(this.cardImage, { responseType: 'blob' })
        .then(({ data }) => {
          let blob = new Blob([data], { type: 'image/png' });
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'card-' + this.cardId + '.png';
          link.click();
        })
        .catch(() => {
          this.showNotif('Unable to download card');
        });
    },
    onCopy() {
      this.showNotif('Card URL copied to clipboard!');
    },
    onError() {
      this.showNotif('Unable to copy URL');
    },
    showNotif(msg) {
      this.$q.notify({
        message: '<span class="center-in-container">' + msg + '</span>',
        html: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
