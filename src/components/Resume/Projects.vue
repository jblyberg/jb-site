<template>
  <div class="row justify-around resume-section">
    <div class="col-11 col-md-1 resume-section-header" id="projects">
      <span>
        <h5>Projects</h5>
      </span>
    </div>
    <div class="col-11 col-md-9">
      <div class="q-pa-md row items-start q-gutter-md justify-around">
        <image-overlay
          v-for="(project, key) in projects"
          :key="key"
          direction="bottom"
          :image="project.image"
          :title="project.name"
          :description="project.description"
          :link="project.link"
          class="projects-image-overlay"
          size="300"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'The Social OPAC',
          description:
            // eslint-disable-next-line
            'SOPAC is a library catalog discovery layer that I have written several iterations of over the years.',
          image: 'statics/project-card-images/sopac.jpg',
          link: '/sopac',
        },
        {
          name: 'New Darien Library',
          description:
            // eslint-disable-next-line
            'Helping to build a brand new library building has been one of the highlights of my career. I was responsible for designing and implementing all the technology.',
          image: 'statics/project-card-images/darienlibrary.jpg',
          link: '/new-darien-library',
        },
        {
          name: 'Fairfield County Minecraft',
          description:
            // eslint-disable-next-line
            'I once created a county-wide library minecraft server cooperative for kids in ten Connecticut towns.',
          image: 'statics/project-card-images/fcmc.jpg',
          link: '/fairfield-county-minecraft',
        },
        {
          name: 'Catalog Card Generator',
          description:
            // eslint-disable-next-line
            "This is a silly little app that I wrote a long time ag and have improved over the years. It's generated millions of cards!",
          image: 'statics/project-card-images/cardgenerator.jpg',
          link: '/card-generator',
        },
      ],
    };
  },
  components: {
    'image-overlay': () =>
      import('components/Shared/ImageOverlay.vue').then(m => m.default),
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
}

.dimmed:after {
  background: rgba(0, 0, 0, 0.7) !important;
}

.projects-image-overlay {
  // margin: 10px 10px 10px 10px;
}
</style>
