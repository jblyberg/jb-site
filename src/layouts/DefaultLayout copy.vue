<template>
  <q-layout view="hHh Lpr lff" class="default-layout">
    <q-header class="bg-transparent">
      <q-toolbar class="q-pa-sm">
        <q-btn
          v-if="this.$q.platform.is.mobile"
          flat
          @click="drawer = !drawer"
          round
          icon="menu"
          color="primary"
          size="20px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" :width="200" :breakpoint="500" show-if-above>
      <q-scroll-area class="fit ">
        <q-list padding class="menu-list ">
          <q-item
            v-for="(nav, index) in navs"
            :to="nav.to"
            class="text-grey-5 default-drawer-item"
            clickable
            exact
            :key="index"
            @click="drawerItemClick"
          >
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ nav.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container id="main-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: '/',
        },
        {
          label: 'Card Catalog',
          icon: 'settings',
          to: '/card-generator',
        },
        {
          label: 'About Me',
          icon: 'person',
          to: '/about',
        },
      ],
    };
  },
  methods: {
    drawerItemClick() {
      console.log(this.$q.platform.is.desktop);
      if (!this.$q.platform.is.desktop) {
        this.drawer = false;
      }
    },
  },
};
</script>

<style>
.default-layout {
  position: initial;
}

.q-drawer {
  background: transparent;
}

.q-drawer--mobile {
  padding-top: 55px;
}

.default-drawer-item {
  font-size: 18px;
}
</style>
