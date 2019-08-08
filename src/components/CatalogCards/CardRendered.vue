<template>
  <div class="card-image" :style="cardImageBgStyle">
    <img src="~assets/cardstock/card1.png" style="visibility: hidden;" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('catalogCards', ['cardImage']),
    cardImageBgStyle() {
      return "background-image: url('" + this.cardImage + "')";
    },
  },
};
</script>

<style lang="scss" scoped>
.card-image {
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
}
</style>
