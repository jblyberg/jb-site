<template>
  <div class="row justify-around resume-section">
    <div class="col-11 col-md-1 resume-section-header" id="projects">
      <span>
        <h5>Projects</h5>
      </span>
    </div>
    <div class="col-11 col-md-9">
      <div class="q-pa-md row items-start q-gutter-md justify-around">
        <q-card
          v-for="project in projects"
          :key="project.key"
          class="bg-grey-8 my-card"
        >
          <q-img :src="project.image" basic>
            <div class="absolute-bottom">
              {{ project.name }}
            </div>
          </q-img>

          <q-card-section dark>
            {{ project.description }}
          </q-card-section>
        </q-card>
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
          description: 'Voluptate consectetur reprehenderit tempor sint.',
          image: '../../assets/project-card-images/sopac.jpg',
        },
        {
          name: 'Darien Library Website',
          description:
            'Minim minim pariatur amet voluptate elit fugiat labore.',
          image: '../../assets/project-card-images/dlwebsite.jpg',
        },
        {
          name: 'New Darien Library',
          description:
            'Minim minim pariatur amet voluptate elit fugiat labore.',
          image: '../../assets/project-card-images/darienlibrary.jpg',
        },
        {
          name: 'Digital Media Lab',
          description:
            'Minim minim pariatur amet voluptate elit fugiat labore.',
          image: '../../assets/project-card-images/dml.jpg',
        },
        {
          name: 'Fairfield County Minecraft',
          description:
            'Minim minim pariatur amet voluptate elit fugiat labore.',
          image: '../../assets/project-card-images/fcmc.jpg',
        },
        {
          name: 'Catalog Card Generator',
          description:
            'Minim minim pariatur amet voluptate elit fugiat labore.',
          image: '../../assets/project-card-images/cardgenerator.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
}
</style>
