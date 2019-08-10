<template>
  <default-page-container>
    <q-page class="front-page">
      <div class="row front-page-section-row">
        <div class="col-12 col-md-4 big-icon">
          <q-icon name="fas fa-hashtag" />
        </div>
        <div class="col-12 col-md-8 front-page-section-content">
          <div>
            Hi! I'm John Blyberg. I'm an entrepreneur, freelance app developer,
            technologist, library consultant and general geeky roustabout living
            in Lexington, Kentucky. I like to tinker and build things. If it
            exists, I like to make it better. Let me help with your project!
          </div>
          <span>
            <q-icon
              name="fas fa-angle-double-right"
              class="front-page-icon-more"
            />
            <router-link to="/about">More about me</router-link>
          </span>
        </div>
      </div>

      <div class="row front-page-section-row">
        <div class="col-12 col-md-8 front-page-section-content">
          <div>
            I have been coding for the web since 1999. A lot has changed in that
            time and I've always been excited to learn new technologies as they
            emerge. I am a full-stack developer who enjoys working on all levels
            of an application.
          </div>
          <span>
            <q-icon
              name="fas fa-angle-double-right"
              class="front-page-icon-more"
            />
            <router-link to="/about">My qualifications</router-link>
          </span>
        </div>
        <div class="col-12 col-md-4 big-icon">
          <q-icon name="fas fa-code" />
        </div>
      </div>

      <div class="row front-page-section-row">
        <div class="col-12 col-md-4 big-icon">
          <q-icon name="fas fa-terminal" />
        </div>
        <div class="col-12 col-md-8 front-page-section-content">
          <div>
            I began my career as a systems administrator, picking up programming
            skills to create applications that made the jobs of my colleages
            easier. I have a well-rounded understanding of infrastructure,
            information architecture, and the devops ecosystem that make modern
            app development successful.
          </div>
        </div>
      </div>

      <div class="row front-page-section-row">
        <div class="col-12 col-md-8 front-page-section-content">
          <div>
            I have spent {{ yearsInLibs }} years working in public libraries.
            Much of that time was spent as a library administrator and
            technology manager. I am very familiar with the non-profit world and
            how libraries work. I have consulted with dozens of libraries and
            spoken nationally and internationally about technology and user
            experience in libraries.
          </div>
        </div>
        <div class="col-12 col-md-4 big-icon">
          <q-icon name="fas fa-book-reader" />
        </div>
      </div>
    </q-page>
  </default-page-container>
</template>

<script>
import { date } from 'quasar';

export default {
  computed: {
    yearsInLibs() {
      const dateStarted = new Date(2002, 9, 1);
      const dateNow = new Date();
      const yearsInLibs = date.getDateDiff(dateNow, dateStarted, 'years');
      return yearsInLibs;
    },
  },
};
</script>

<style lang="scss" scoped>
.front-page {
  margin-top: 50px;
}

.front-page-section-row {
  margin-bottom: 40px;
}

.front-page-section-content {
  font-size: 1.2rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
}

.front-page-icon-more {
  margin-left: 5px;
  margin-right: 20px;
  font-size: 1.2rem;
}

.big-icon {
  color: #d17f48;
  font-size: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
