<template>
  <div class="card-writer">
    <q-img
      :src="cardStockImage"
      spinner-color="white"
      style="height: 221px; width: 361px"
    />
    <div class="type-animation-block">
      <vue-typed-js
        :typeSpeed="120"
        :backSpeed="30"
        :backDelay="300"
        :loop="true"
        :showCursor="false"
        :strings="haikuBreakLines(haikus)"
        :shuffle="true"
      >
        <h5 class="typing"></h5>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueTypedJs from 'vue-typed-js';
Vue.use(VueTypedJs);
import haikus from '../../assets/haiku.db.json';

export default {
  data() {
    return {
      haikus: haikus.haikus,
    };
  },
  computed: {
    cardStockImage() {
      const randCardNum = Math.floor(Math.random() * 4) + 1;
      return '../../assets/cardstock/card' + randCardNum + '.png';
    },
  },
  methods: {
    nl2br(str, replaceMode, isXhtml = true) {
      var breakTag = isXhtml ? '<br />' : '<br>';
      var replaceStr = replaceMode ? '$1' + breakTag : '$1' + breakTag + '$2';
      return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
    },
    haikuBreakLines(haikus) {
      const haikusParsed = [];
      haikus.forEach(haiku => {
        haikusParsed.push(this.nl2br(haiku));
      });
      return haikusParsed;
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'freemonobold';
  src: url('../../assets/fonts/freemonobold.ttf');
}

.card-writer {
  background-image: url('~assets/cardstock/card2.png');
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
}

.type-animation-block {
  position: absolute;
  h5 {
    color: black;
    padding-top: 56px;
    padding-left: 95px;
    max-width: 355px;
    word-wrap: break-word;
    font-family: 'freemonobold';
    font-size: 13px;
    line-height: 1rem;
  }
}
</style>
