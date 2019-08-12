<template>
  <div class="col-12">
    <div class="row justify-around">
      <div class="col-3">
        <q-radio dark v-model="cardtype" val label="Print" color="accent" />
      </div>
      <div class="col-3">
        <q-radio
          dark
          v-model="cardtype"
          val="PHONO"
          label="Audio"
          color="accent"
        />
      </div>
      <div class="col-3">
        <q-radio
          dark
          v-model="cardtype"
          val="VIDEO"
          label="Video"
          color="accent"
        />
      </div>
    </div>

    <div class="q-gutter-md">
      <q-input
        dark
        v-model="title"
        label="Title"
        color="accent"
        class="text-white"
      />

      <q-input
        dark
        v-model="callnum"
        label="Call Number"
        color="accent"
        class="text-white"
      />

      <q-input
        dark
        label="Card Text"
        v-model="cardtext"
        filled
        type="textarea"
        color="accent"
      />

      <q-input
        dark
        v-model="scribble1"
        label="Scribble One"
        color="accent"
        class="text-white"
      />

      <q-input
        dark
        v-model="scribble2"
        label="Scribble Two"
        color="accent"
        class="text-white"
      />

      <q-input
        dark
        v-model="scribble3"
        label="Scribble Three"
        color="accent"
        class="text-white"
      />

      <div>
        <q-btn
          :label="buttonText"
          color="accent"
          class="full-width"
          @click="submitForm"
          :disabled="disableSubmit"
          style="margin-top: 15px"
        >
          <q-spinner-dots v-if="disableSubmit" color="grey-1" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';
import { scroll } from 'quasar';
const { getScrollTarget, setScrollPosition } = scroll;

export default {
  data() {
    return {
      disableSubmit: false,
    };
  },
  computed: {
    ...mapState('catalogCards', ['cardImage']),
    ...mapFields('catalogCards', [
      'card.title',
      'card.cardtype',
      'card.callnum',
      'card.cardtext',
      'card.scribble1',
      'card.scribble2',
      'card.scribble3',
    ]),
    buttonText() {
      if (this.disableSubmit === true) {
        return '';
      }
      if (this.cardImage === null) {
        return 'Make My Card!';
      }
      return 'Make it Again!';
    },
  },
  methods: {
    ...mapActions('catalogCards', ['createCard', 'resetCard']),
    submitForm() {
      this.createCard();
      this.disableSubmit = true;
      if (this.$q.platform.is.mobile) {
        this.scrollToElement(document.getElementById('CatalogCard'));
      }
      setTimeout(() => {
        this.disableSubmit = false;
      }, 5000);
    },
    scrollToElement(el) {
      const target = getScrollTarget(el);
      const offset = el.offsetTop;
      const duration = 300;
      setScrollPosition(target, offset, duration);
    },
  },
};
</script>

<style lang="scss" scoped></style>
