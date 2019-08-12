<template>
  <q-page>
    <div class="row justify-around">
      <div class="col-11">
        <h3>Contact Me</h3>
      </div>
    </div>
    <div class="row justify-around">
      <div class="col-11 col-md-7 items-center">
        <p>
          Please feel free to contact me with any inqiries you might have
          regarding my services. I will generally respond within a day of
          recieveing your message. Thank you!
        </p>
        <div class="contact-form-inputs">
          <q-input
            dark
            v-model="name"
            label="Your name"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            v-model="email"
            label="Your email address"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            v-model="subject"
            label="Subject"
            color="accent"
            class="text-white"
          />

          <q-input
            dark
            label="Message"
            v-model="message"
            filled
            type="textarea"
            color="accent"
          />

          <div class="row justify-around">
            <vue-recaptcha
              ref="recaptcha"
              @verify="onCaptchaVerified"
              @expired="onCaptchaExpired"
              :sitekey="captchaSiteKey"
              :loadRecaptchaScript="true"
              style="margin-top: 15px"
            ></vue-recaptcha>
          </div>

          <q-btn
            label="Send me a message!"
            color="accent"
            class="full-width"
            :disabled="disableSubmit"
            @click="submitForm"
            style="margin-top: 15px"
          />
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

export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      disableSubmit: true,
      captchaVerfified: false,
      captchaSiteKey: '6Ld0rbIUAAAAABKdRnlmJM4P4cnDc10ZFV4OtGlx',
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.$refs.recaptcha.execute();
    },
    onCaptchaExpired() {
      this.resetRecaptcha();
    },
    onCaptchaVerified() {
      this.disableSubmit = false;
      this.captchaVerfified = true;
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset();
      this.disableSubmit = true;
      this.captchaVerfified = false;
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
