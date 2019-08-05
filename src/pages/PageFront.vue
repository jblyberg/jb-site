<template>
  <q-page>
    <my-page-container>
      <h3>Welcome to my page!</h3>
      <div v-for="n in 100" :key="n" class="q-py-xs">
        {{ n }} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </my-page-container>
  </q-page>
</template>

<script>
export default {
  components: {
    'my-page-container': () =>
      import('components/MyPageContainer.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped></style>
