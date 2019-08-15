<template>
  <div :class="classes">
    <div class="col-12 col-md-2 big-icon">
      <q-icon :name="icon" />
    </div>
    <div class="col-9 col-md-7">
      <div class="row">
        <md-viewer :src="blurbMarkdown" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['reversed', 'blurbMarkdown', 'icon'],
  computed: {
    classes() {
      return 'row justify-around front-page-section-row' + this.reverse();
    },
  },
  methods: {
    reverse() {
      if (this.reversed === 'true') {
        return ' reverse';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.front-page-section-row {
  font-size: 1.3rem;
  @media (min-width: 1024px) {
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 35px;
  }
}
.big-icon {
  color: #d17f48;
  font-size: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
}
</style>
