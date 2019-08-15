<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-8 col-md-4 column items-center">
        <q-img
          :src="require('assets/headshot.jpg')"
          spinner-color="white"
          class="about-page-headshot"
        />
        <div class="q-pa-md q-gutter-sm about-page-button-row">
          <q-btn
            round
            color="secondary"
            icon="fab fa-linkedin-in"
            @click="openLink('https://www.linkedin.com/in/jblyberg/')"
          >
            <q-tooltip>LinkedIn</q-tooltip>
          </q-btn>
          <q-btn
            round
            color="primary"
            icon="fab fa-twitter"
            @click="openLink('https://twitter.com/jblyberg')"
          >
            <q-tooltip>Twitter</q-tooltip>
          </q-btn>
          <q-btn
            round
            color="brown-5"
            icon="fab fa-github"
            @click="openLink('https://github.com/jblyberg')"
          >
            <q-tooltip>GitHub</q-tooltip>
          </q-btn>
        </div>
      </div>
      <div class="col-11 col-md-7">
        <h3>About Me</h3>
        <div>
          <md-viewer src="assets/markdown/about.md" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    openLink: link => {
      window.open(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.about-page-headshot {
  margin-top: 10px;
}

.about-page-button-row {
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>
