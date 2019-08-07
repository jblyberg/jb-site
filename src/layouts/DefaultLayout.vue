<template>
  <q-layout view="hHh Lpr fFf">
    <default-header />
    <default-menu />
    <default-footer />

    <q-page-container style="padding-top: 0px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  components: {
    'default-header': () =>
      import('components/DefaultLayout/DefaultLayoutHeader.vue').then(
        m => m.default
      ),
    'default-footer': () =>
      import('components/DefaultLayout/DefaultLayoutFooter.vue').then(
        m => m.default
      ),
    'default-menu': () =>
      import('components/DefaultLayout/DefaultLayoutMenu.vue').then(
        m => m.default
      ),
  },
};
</script>

<style lang="scss"></style>
