<template>
  <div v-if="image" class="content" :style="size ? getSize : null">
    <router-link :to="link">
      <img :src="image" class="content-image" />
      <div class="content-overlay">
        <div :class="directionClass">
          <h6 v-if="title" class="content-title">{{ title }}</h6>
          <p v-if="description" class="content-text">{{ description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['direction', 'image', 'title', 'description', 'size', 'link'],
  data() {
    return {
      directions: {
        bottom: 'fadeIn-bottom',
        top: 'fadeIn-top',
        left: 'fadeIn-left',
        right: 'fadeIn-right',
        topleft: 'fadeIn-top fadeIn-left',
        topright: 'fadeIn-top fadeIn-right',
        bottomleft: 'fadeIn-bottom fadeIn-left',
        bottomright: 'fadeIn-bottom fadeIn-right',
      },
    };
  },
  computed: {
    directionClass() {
      return 'content-details ' + this.directions[this.direction];
    },
    getSize() {
      return 'max-width: ' + this.size + 'px';
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
}

.content-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
  background: rgba(0, 0, 0, 0.7);
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay {
  opacity: 1;
}

.content-image {
  display: block;
  width: 100%;
  height: auto;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}
</style>
