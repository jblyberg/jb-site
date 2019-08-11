<template>
  <div>
    <q-img
      :src="cardImage"
      spinner-color="white"
      style="height: 221px; width: 361px"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('catalogCards', ['cardImage']),
  },
};
</script>

<style lang="scss" scoped></style>
