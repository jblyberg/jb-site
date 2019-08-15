<template>
  <q-page>
    <div v-for="content in rowContent" :key="content.key">
      <front-page-row :rowContent="content" />
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar';
import frontPageContent from '../assets/json/frontPage.db.json';

export default {
  data() {
    return {
      rowContent: frontPageContent.rowContent,
    };
  },
  computed: {
    yearsInLibs() {
      const dateStarted = new Date(2002, 9, 1);
      const dateNow = new Date();
      const yearsInLibs = date.getDateDiff(dateNow, dateStarted, 'years');
      return yearsInLibs;
    },
  },
  components: {
    'front-page-row': () =>
      import('components/FrontPage/FrontPageRow.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped></style>
