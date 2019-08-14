<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-11">
        <h3>Contact Me</h3>
      </div>
    </div>
    <div class="row justify-around">
      <div
        v-if="!formSubmissionSuccess && !formError"
        class="col-11 col-md-7 items-center"
      >
        <p>
          Please feel free to contact me with any inqiries you might have
          regarding my services. I will generally respond within a day of
          recieveing your message. Thank you!
        </p>
        <q-form
          ref="contactForm"
          @submit="submitForm"
          class="contact-form-inputs"
        >
          <q-input
            dark
            v-model="formData.name"
            :rules="[
              val => (val && val.length > 0) || 'Please enter your name',
            ]"
            label="Your name"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            v-model="formData.email"
            :rules="[
              val =>
                isValidEmailAddress(val) || 'Please use a valid Email address',
            ]"
            lazy-rules
            label="Your email address"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            v-model="formData.subject"
            label="Subject"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            label="Message"
            v-model="formData.message"
            :rules="[val => (val && val.length > 0) || 'Please type a message']"
            filled
            type="textarea"
            color="accent"
            required
          />

          <div class="row justify-around">
            <vue-recaptcha
              ref="recaptcha"
              @verify="onCaptchaVerified"
              @expired="onCaptchaExpired"
              :sitekey="captchaSiteKey"
              :loadRecaptchaScript="true"
            ></vue-recaptcha>
          </div>

          <q-btn
            type="submit"
            :label="submitLabel"
            color="accent"
            class="full-width"
            :disabled="disableSubmit"
            style="margin-top: 15px"
          >
            <q-spinner-dots v-if="formSubmitted" color="grey-1" />
          </q-btn>
        </q-form>
      </div>

      <div v-if="formError" class="col-11 col-md-7 items-center">
        <p>There was an error: {{ formError }}</p>
        <p>Please try again later.</p>
      </div>

      <div v-if="formSubmissionSuccess" class="col-11 col-md-7">
        <div class="row justify-around contact-submitted">
          Thank you! I will be in touch soon.
        </div>
      </div>

      <div class="col-6 col-md-3 big-icon">
        <q-icon name="fas fa-envelope" />
      </div>
    </div>
  </q-page>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      formData: this.getInitialState(),
      submitLabel: 'Send me a message!',
      disableSubmit: true,
      formSubmitted: false,
      formSubmissionSuccess: false,
      formError: false,
      captchaVerfified: false,
      captchaSiteKey: '6Ld0rbIUAAAAABKdRnlmJM4P4cnDc10ZFV4OtGlx',
    };
  },
  methods: {
    getInitialState() {
      return {
        name: '',
        email: '',
        subject: '',
        message: '',
      };
    },
    submitForm() {
      this.submitLabel = '';
      this.formSubmitted = true;
      this.$axios
        .post(process.env.API_SERVER + '/contact/submit', this.formData)
        .then(() => {
          this.formSubmissionSuccess = true;
          this.formData = this.getInitialState();
          setTimeout(() => {
            this.resetForm();
          }, 5000);
        })
        .catch(error => {
          this.formError = error;
          setTimeout(() => {
            this.resetForm();
          }, 5000);
        });
    },
    onCaptchaExpired() {
      this.resetRecaptcha();
    },
    onCaptchaVerified() {
      this.disableSubmit = false;
      this.captchaVerfified = true;
    },
    resetForm() {
      this.formSubmissionSuccess = false;
      this.formSubmitted = false;
      this.formError = false;
      this.disableSubmit = true;
      this.captchaVerfified = false;
      this.submitLabel = 'Send me a message!';
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset();
      this.disableSubmit = true;
      this.captchaVerfified = false;
    },
    isValidEmailAddress(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
  },
  components: { VueRecaptcha },
};
</script>

<style lang="scss" scoped>
.contact-form-inputs {
  .q-input {
    margin-bottom: 20px;
  }
}

.contact-submitted {
  margin-top: 50px;
  font-size: 1.5rem;
}

.big-icon {
  color: #d17f48;
  font-size: 12em;
  display: flex;
  justify-content: center;
  margin-right: 30px;
  @media (max-width: 1024px) {
    visibility: hidden;
  }
}
</style>
