<template>
  <q-page class="about-page">
    <div class="row justify-around">
      <div class="col-6 col-md-4 column items-center">
        <q-img
          src="assets/headshot.jpg"
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
        <p>
          John Blyberg was formerly the Assistant Director for Innovation and
          User Experience at the Darien Library in Connecticut. Prior to that,
          he was the System Administrator and Lead Developer for the Ann Arbor
          District Library (AADL) in Michigan. Before working in libraries, John
          was the IT manager for the North American office of the British car
          company, Lotus Engineering. He has recently followed his heart to
          Kentucky to live with his wife and is now doing freelance and
          consulting work.
        </p>

        <p>
          John was named a Library Journal “Mover and Shaker,” took first prize
          in Talis’ 2006 “Mashing-up the Library” competition. In 2009 he
          received the LITA/Brett Butler Entrepreneurship Award for his work on
          the SOPAC Application Suite. At Darien Library, John formed the
          first-ever public library User Experience department to completely
          redefine how customer service and interaction is handled and delivered
          to staff and users.
        </p>

        <p>
          If you want to know what my philosophy on Libraries and and Librarians
          is, take a peek at a manifesto I wrote with two other amazing
          librarians (one of whom is my wife).
          <router-link to="/darien-statements"
            >The Darien Statements</router-link
          >still embodies the values I have tried to live by in my professional
          life.
        </p>

        <p>
          He is acclimating to the Kentucky way of life. As a boy from Maine, he
          can really get used to these winters.
        </p>
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
.about-page {
  font-size: 1.2rem;
}

.about-page-headshot {
  margin-top: 10px;
}

.about-page-button-row {
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>
