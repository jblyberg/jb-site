<template>
  <q-page>
    <front-page-row
      icon="fas fa-hashtag"
      blurbMarkdown="statics/markdown/frontpage_row_1.md"
    />
    <front-page-row
      reversed="true"
      icon="fas fa-code"
      blurbMarkdown="statics/markdown/frontpage_row_2.md"
    />
    <front-page-row
      icon="fas fa-terminal"
      blurbMarkdown="statics/markdown/frontpage_row_3.md"
    />
    <front-page-row
      reversed="true"
      icon="fas fa-book-reader"
      blurbMarkdown="statics/markdown/frontpage_row_4.md"
    />
  </q-page>
</template>

<script>
export default {
  components: {
    'front-page-row': () =>
      import('components/FrontPage/FrontPageRow.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped></style>
