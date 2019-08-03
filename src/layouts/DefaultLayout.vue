<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/card-generator" label="Card Catalog" />
        <q-route-tab to="/about" label="About Me" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'DefaultLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style></style>
