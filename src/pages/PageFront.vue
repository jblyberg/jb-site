<template>
  <q-page>
    <div class="row">
      <div class="wrap-banner col shadow-3">
        <div class="main-title absolute-center">
          <h2>Blyberg.net</h2>
          <p class="subtitle">Subtitle 1</p>
          <p class="subtitle">Subtitle 2</p>
          <br />
          <a
            class="gh-button"
            target="_blank"
            href="https://github.com/creotip/vue-particles"
          >
            <span class="gh-button__icon"></span>Download
          </a>
        </div>

        <vue-particles
          color="#ffffff"
          :particleOpacity="0.7"
          linesColor="#ffffff"
          :particlesNumber="40"
          shapeType="circle"
          :particleSize="3"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
          <div>This is a test</div>
        </vue-particles>
      </div>
    </div>
    <q-page-container>
      <div class="row">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          delectus non asperiores inventore ipsam? Sapiente veritatis repellat
          voluptate cum, saepe similique ab consequatur voluptatibus accusantium
          dolore ducimus in, nulla consequuntur.
        </p>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import Vue from 'vue';
import VueParticles from 'vue-particles';
import VueTypedJs from 'vue-typed-js';

Vue.use(VueTypedJs);
Vue.use(VueParticles);

export default {
  name: 'PageIndex',
  data() {
    return {
      bannerPicture: '../assets/trees.jpg',
    };
  },
};
</script>

<style lang="scss" scoped>
#particles-js {
  background-image: url('../assets/trees.jpg');
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.text-center {
  text-align: center;
}

.wrap-banner {
  display: flex;
}

.main-title {
  color: #fff;
  z-index: 999;

  h2 {
    font-size: 7rem;
    font-family: 'Averia Serif';
    text-shadow: 3px 3px #000000;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
  }
  p.subtitle {
    font-size: 1.7rem;
    margin: 0;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
}
</style>
