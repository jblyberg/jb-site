<template>
  <q-layout view="hHh Lpr lff">
    <div class="wrap-banner shadow-3">
      <div class="main-title">
        <h2>
          John Blyberg
        </h2>
        <p class="subtitle">
          Libraries &amp; code
        </p>
      </div>

      <vue-particles
        color="#ffffff"
        :particleOpacity="0.7"
        linesColor="#ffffff"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        :class="bannerClass()"
      />

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

      <q-drawer v-model="drawer" :width="200" :breakpoint="768" show-if-above>
        <q-scroll-area class="fit ">
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
                <q-item-label class="menu-item-label">{{
                  nav.label
                }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>

    <q-page-container style="padding-top: 0px">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from 'vue';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);
// console.log(this.$route);

export default {
  data() {
    return {
      drawer: this.$q.platform.is.desktop,
      'banner-class': 'banner-sky',
      navs: [
        {
          label: 'Home',
          icon: 'home',
          to: '/',
        },
        {
          label: 'Card Catalog',
          icon: 'horizontal_split',
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
    bannerClass() {
      return 'banner-' + this.$route.name;
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

.menu-item-icon {
  color: #f0a937;
}

.menu-item-label {
  color: #ffffff;
}

.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  min-height: 350px;
  justify-content: center;
}

#particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: -1; */
}

.main-title {
  color: #fff;
  z-index: 999;

  h2 {
    font-size: 2.5rem;
    font-family: 'Fredericka the Great', cursive;
    text-shadow: 4px 4px #000000;
    text-transform: uppercase;
    margin: 0;
    @media (min-width: 900px) {
      font-size: 4rem;
    }
  }
  p.subtitle {
    font-size: 1.7rem;
    font-family: 'Cabin Sketch', cursive;
    margin: 0;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
  }
}

.banner-front {
  background-image: url('../assets/sky.jpg');
}

.banner-ccgen {
  background-image: url('../assets/keys.jpg');
}

.banner-about {
  background-image: url('../assets/trees.jpg');
}

.banner-darien {
  background-image: url('../assets/trees.jpg');
}

.light-dimmed:after {
  background: rgba(255, 255, 255, 0.15) !important;
}
</style>
