<template>
  <q-drawer
    :value="menuDrawerState"
    :width="210"
    :breakpoint="768"
    show-if-above
    @hide="setMenuDrawerState(false)"
  >
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          v-for="(nav, index) in navs"
          :to="nav.to"
          class="text-grey-5 default-drawer-item"
          clickable
          exact
          :key="index"
          @click="drawerItemClick"
          :active="active"
          active-class="light-dimmed"
        >
          <q-item-section avatar>
            <q-icon class="menu-item-icon" :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="menu-item-label">{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      active: false,
      navs: [
        {
          label: 'Home',
          icon: 'fas fa-home',
          to: '/',
        },
        {
          label: 'Catalog Cards',
          icon: 'fas fa-font',
          to: '/card-generator',
        },
        {
          label: 'About Me',
          icon: 'fas fa-user',
          to: '/about',
        },
        {
          label: 'Résumé',
          icon: 'fas fa-file',
          to: '/resume',
        },
        {
          label: 'Contact Me',
          icon: 'fas fa-envelope',
          to: '/contact',
        },
      ],
    };
  },
  computed: {
    ...mapState('behaviors', ['menuDrawerState']),
  },
  methods: {
    ...mapActions('behaviors', ['setMenuDrawerState']),
    drawerItemClick() {
      if (this.$q.platform.is.mobile) {
        this.drawer = false;
      }
    },
  },
};
</script>

<style lang="scss">
.q-drawer {
  background: transparent;
}

.q-drawer--mobile {
  padding-top: 55px;
}

.default-drawer-item {
  font-size: 18px;
}

.menu-list {
  a:hover {
    text-decoration: none;
  }
  a:active {
    text-decoration: none;
  }
}

.menu-item-icon {
  color: #f0a937;
}

.menu-item-label {
  color: #ffffff;
}

.light-dimmed:after {
  background: rgba(255, 255, 255, 0.15) !important;
}
</style>
