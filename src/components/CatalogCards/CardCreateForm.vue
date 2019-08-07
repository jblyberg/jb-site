<template>
  <q-form @submit="submitForm" @reset="resetCard" class="q-gutter-md">
    <div class="q-gutter-sm text-white">
      <q-radio
        dark
        :value="card.cardtype"
        val=""
        label="Print"
        color="accent"
      />
      <q-radio
        dark
        :value="card.cardtype"
        val="PHONO"
        label="Audio"
        color="accent"
      />
      <q-radio
        dark
        :value="card.cardtype"
        val="VIDEO"
        label="Video"
        color="accent"
      />
    </div>

    <q-input
      dark
      :value="card.title"
      label="Title"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      :value="card.callnum"
      label="Call Number"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      label="Card Text"
      :value="card.cardtext"
      filled
      type="textarea"
      color="accent"
    />

    <q-input
      dark
      :value="card.scribble1"
      label="Scribble One"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      :value="card.scribble2"
      label="Scribble Two"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      :value="card.scribble3"
      label="Scribble Three"
      color="accent"
      class="text-white"
    />

    <div>
      <q-btn label="Make my Card!" type="submit" color="primary" />
      <q-btn
        label="Try Again"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </q-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  // data() {
  //   return {
  //     card: {
  //       title: '',
  //       cardtype: '',
  //       callnum: '',
  //       cardtext: '',
  //       scribble1: '',
  //       scribble2: '',
  //       scribble3: '',
  //     },
  //   };
  // },
  computed: {
    ...mapState('catalogCards', ['card']),
  },
  methods: {
    ...mapActions('catalogCards', ['createCard']),
    submitForm() {
      this.createCard(this.card);
    },
    resetCard() {},
  },
};
</script>

<style lang="scss" scoped></style>
