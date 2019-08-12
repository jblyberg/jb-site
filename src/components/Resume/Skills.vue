<template>
  <div class="row justify-around resume-section">
    <div class="col-11 col-md-1 resume-section-header">
      <span>
        <h5>Skills</h5>
      </span>
    </div>
    <div class="col-11 col-md-9">
      <q-list dark>
        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header">
              Programming
            </q-item-label>
            <div
              v-for="skill in skills.coding"
              :key="skill.key"
              class="resume-skill-level"
            >
              <q-item-label> {{ skill.name }}: </q-item-label>
              <q-item-label>
                <q-linear-progress
                  dark
                  stripe
                  rounded
                  style="height: 20px"
                  :value="skill.progress"
                  color="blue"
                  class="q-mt-sm"
                />
              </q-item-label>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header">
              Frameworks
            </q-item-label>
            <div
              v-for="skill in skills.frameworks"
              :key="skill.key"
              class="resume-skill-level"
            >
              <q-item-label> {{ skill.name }}: </q-item-label>
              <q-item-label>
                <q-linear-progress
                  dark
                  stripe
                  rounded
                  style="height: 20px"
                  :value="skill.progress"
                  color="blue"
                  class="q-mt-sm"
                />
              </q-item-label>
            </div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label class="resume-subsection-header">
              System Administration
            </q-item-label>
            <div
              v-for="skill in skills.sysadmin"
              :key="skill.key"
              class="resume-skill-level"
            >
              <q-item-label> {{ skill.name }}: </q-item-label>
              <q-item-label>
                <q-linear-progress
                  dark
                  stripe
                  rounded
                  style="height: 20px"
                  :value="skill.progress"
                  color="blue"
                  class="q-mt-sm"
                />
              </q-item-label>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        coding: [
          {
            name: 'PHP',
            progress: 0.96,
          },
          {
            name: 'Javascript / Typescript',
            progress: 0.87,
          },
          {
            name: 'HTML',
            progress: 0.95,
          },
          {
            name: 'CSS, SASS, Less, Stylus',
            progress: 0.75,
          },
        ],
        sysadmin: [
          {
            name: 'Linux (Ubuntu, Red Hat, Debian)',
            progress: 0.9,
          },
          {
            name: 'Microsoft Server Infrastructure',
            progress: 0.78,
          },
          {
            name: 'VMWare ESXi, vSphere',
            progress: 0.82,
          },
          {
            name: 'Database & Data Storage',
            progress: 0.86,
          },
          {
            name: 'Containerization (Docker, Kubernetes)',
            progress: 0.68,
          },
          {
            name: 'Networking (TCP/IP, Firewall & Security)',
            progress: 0.9,
          },
          {
            name: 'Voice-Over-IP (Cisco UCM, Asterisk)',
            progress: 0.69,
          },
        ],
        frameworks: [
          {
            name: 'Laravel',
            progress: 0.95,
          },
          {
            name: 'VueJS',
            progress: 0.8,
          },
          {
            name: 'Node JS',
            progress: 0.88,
          },
          {
            name: 'Nest JS',
            progress: 0.81,
          },
          {
            name: 'Quasar',
            progress: 0.83,
          },
          {
            name: 'Twitter Bootstrap',
            progress: 0.77,
          },
          {
            name: 'Wordpress',
            progress: 0.72,
          },
          {
            name: 'Drupal',
            progress: 0.75,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.resume-skill-level {
  margin-bottom: 20px;
}
</style>
