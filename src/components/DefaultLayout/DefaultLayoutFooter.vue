<template>
  <q-footer class="bg-transparent">
    <div v-if="this.$q.platform.is.desktop" class="footer-placement">
      <img src="~assets/dachshund.png" alt="Dachshind!" width="140" />
    </div>
  </q-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-placement {
  padding-left: 30px;
  padding-bottom: 30px;
}
</style>
