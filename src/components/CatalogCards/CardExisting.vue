<template>
  <span></span>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['cardId'],
  methods: {
    ...mapActions('catalogCards', ['loadCard']),
  },
  created() {
    this.loadCard(this.cardId);
    this.$router.replace('/card-generator');
  },
};
</script>

<style lang="scss" scoped></style>
