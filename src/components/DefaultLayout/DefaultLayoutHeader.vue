<template>
  <div class="wrap-banner shadow-3">
    <div class="main-title">
      <h2>John Blyberg</h2>
      <p class="subtitle">Libraries &amp; code</p>
    </div>

    <transition appear enter-active-class="animated fadeIn">
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
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        :style="bannerBgStyle"
      />
    </transition>

    <q-header class="bg-transparent">
      <q-toolbar class="q-pa-sm">
        <q-btn
          v-if="this.$q.platform.is.mobile"
          flat
          @click="setMenuDrawerState(!menuDrawerState)"
          round
          icon="menu"
          color="#ebebeb"
          size="20px"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Vue from 'vue';
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

export default {
  data() {
    return {
      'banner-class': 'banner-sky',
    };
  },
  computed: {
    ...mapState('behaviors', ['menuDrawerState']),
    bannerBgStyle() {
      if (this.$route.name) {
        return (
          "background-image: url('statics/banners/" +
          this.$route.name +
          ".jpg')"
        );
      }
      return "background-image: url('statics/banners/sky.jpg')";
    },
  },
  methods: {
    ...mapActions('behaviors', ['setMenuDrawerState']),
  },
};
</script>

<style lang="scss" scoped>
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
    font-size: 3.7rem;
    font-family: 'Fredericka the Great', cursive;
    text-shadow: 4px 4px #000000;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: 900px) {
      font-size: 2.1rem;
    }
  }
  p.subtitle {
    font-size: 1.7rem;
    font-family: 'Cabin Sketch', cursive;
    margin: 0;
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
  }
}
</style>
