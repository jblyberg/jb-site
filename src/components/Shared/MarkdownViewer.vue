<template>
  <v-runtime-template :template="mdRendered"></v-runtime-template>
</template>

<script>
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import hljs from 'highlight.js';
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
      const md = new Remarkable().use(linkify);
      md.set({
        html: false,
        breaks: true,
        linkify: true,
        highlight: function(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (err) {
              console.log(err);
            }
          }

          try {
            return hljs.highlightAuto(str).value;
          } catch (err) {
            console.log(err);
          }

          return ''; // use external default escaping
        },
      });
      const rendered = this.parseVueMarkup(md.render(mdText));
      this.mdRendered = `<div> ${rendered} </div>`;
    });
  },
  methods: {
    parseVueMarkup(str) {
      const regex = /::(.+?):(.+?):(.+?):(.+?)::/g;

      let m;
      while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        const replacement = `<${m[1]} ${m[2]}="${m[3]}">${m[4]}</${m[1]}>`;
        const subRegex = new RegExp(m[0], 'g');
        str = str.replace(subRegex, replacement);
      }
      return str;
    },
  },
  components: {
    VRuntimeTemplate,
  },
};
</script>

<style lang="scss" scoped>
/deep/ code {
  display: block;
  overflow-x: auto;
  padding-left: 0.5em;

  .hljs-comment,
  .hljs-quote {
    color: #b6b18b;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #eb3c54;
  }

  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #e7ce56;
  }

  .hljs-attribute {
    color: #ee7c2b;
  }

  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #4fb4d7;
  }

  .hljs-title,
  .hljs-section {
    color: #78bb65;
  }

  .hljs-keyword,
  .hljs-selector-tag {
    color: #b45ea4;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }
}
</style>
