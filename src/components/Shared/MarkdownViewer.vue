<template>
  <v-runtime-template :template="mdRendered"></v-runtime-template>
</template>

<script>
import { Remarkable } from 'remarkable';
import VRuntimeTemplate from 'v-runtime-template';

export default {
  name: 'md-viewer',
  props: ['src'],
  data() {
    return {
      mdRendered: '',
    };
  },
  mounted() {
    this.$axios.get(this.src).then(response => {
      const mdText = response.data;
      const md = new Remarkable();
      md.set({
        html: false,
        breaks: true,
      });
      const rendered = this.decodeEntities(md.render(mdText));
      console.log(rendered);
      this.mdRendered = `<div> ${rendered} </div>`;
    });
  },
  methods: {
    decodeEntities(encodedString) {
      var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
      var translate = {
        nbsp: ' ',
        amp: '&',
        quot: '"',
        lt: '<',
        gt: '>',
      };
      return encodedString
        .replace(translate_re, function(match, entity) {
          return translate[entity];
        })
        .replace(/&#(\d+);/gi, function(match, numStr) {
          var num = parseInt(numStr, 10);
          return String.fromCharCode(num);
        });
    },
  },
  components: {
    VRuntimeTemplate,
  },
};
</script>

<style lang="scss" scoped></style>
