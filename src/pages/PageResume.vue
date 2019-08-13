<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-11">
        <h3>Résumé, etc</h3>
      </div>
    </div>

    <resume-experience />
    <q-separator color="accent" spaced inset />
    <resume-education />
    <q-separator color="accent" spaced inset />
    <resume-service />
    <q-separator color="accent" spaced inset />
    <resume-awards />
    <q-separator color="accent" spaced inset />
    <resume-memberships />
    <q-separator color="accent" spaced inset />
    <resume-projects />
    <q-separator color="accent" spaced inset />
    <resume-skills />
  </q-page>
</template>

<script>
export default {
  components: {
    'resume-experience': () =>
      import('components/Resume/Experience.vue').then(m => m.default),
    'resume-education': () =>
      import('components/Resume/Education.vue').then(m => m.default),
    'resume-service': () =>
      import('components/Resume/Service.vue').then(m => m.default),
    'resume-awards': () =>
      import('components/Resume/Awards.vue').then(m => m.default),
    'resume-memberships': () =>
      import('components/Resume/Memberships.vue').then(m => m.default),
    'resume-skills': () =>
      import('components/Resume/Skills.vue').then(m => m.default),
    'resume-projects': () =>
      import('components/Resume/Projects.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped>
/deep/ .resume-section-header {
  margin-top: 5px;
}

/deep/ .resume-section {
  margin-top: 30px;
}

/deep/ .q-item {
  margin-bottom: 15px;
}

/deep/ .resume-subsection-header {
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: #e9c896;
}

/deep/ .resume-right {
  float: right;
}
</style>
