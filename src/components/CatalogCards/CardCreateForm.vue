<template>
  <q-form @submit="submitForm" @reset="resetCard" class="q-gutter-md">
    <div class="q-gutter-sm text-white">
      <q-radio dark v-model="cardtype" val="" label="Print" color="accent" />
      <q-radio
        dark
        v-model="cardtype"
        val="PHONO"
        label="Audio"
        color="accent"
      />
      <q-radio
        dark
        v-model="cardtype"
        val="VIDEO"
        label="Video"
        color="accent"
      />
    </div>

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
        type="submit"
        color="accent"
        class="full-width"
      />
    </div>
  </q-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
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
      if (this.cardImage === null) {
        return 'Make My Card!';
      }
      return 'Try Again!';
    },
  },
  methods: {
    ...mapActions('catalogCards', ['createCard', 'resetCard']),
    submitForm() {
      this.createCard();
    },
  },
};
</script>

<style lang="scss" scoped></style>
