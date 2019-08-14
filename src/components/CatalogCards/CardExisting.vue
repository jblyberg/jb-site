<template>
  <span></span>
</template>

<script>
export default {
  props: ['cardId'],
  created() {
    const route = '/' + this.cardId;
    this.$router.replace(route);
  },
};
</script>

<style lang="scss" scoped></style>
