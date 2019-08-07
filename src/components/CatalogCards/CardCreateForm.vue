<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="q-gutter-sm text-white">
      <q-radio
        dark
        v-model="matType"
        val="print"
        label="Print"
        color="accent"
      />
      <q-radio
        dark
        v-model="matType"
        val="audio"
        label="Audio"
        color="accent"
      />
      <q-radio
        dark
        v-model="matType"
        val="video"
        label="Video"
        color="accent"
      />
    </div>

    <q-input
      dark
      v-model="callNum"
      label="Call Number"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      v-model="title"
      label="Title"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      label="Card Text"
      v-model="text"
      filled
      type="textarea"
      color="accent"
    />

    <q-input
      dark
      v-model="scribble1"
      label="Scribble One"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      v-model="scribble2"
      label="Scribble Two"
      color="accent"
      class="text-white"
    />

    <q-input
      dark
      v-model="scribble3"
      label="Scribble Three"
      color="accent"
      class="text-white"
    />

    <div>
      <q-btn label="Make my Card!" type="submit" color="primary" />
      <q-btn
        label="Try Again"
        type="reset"
        color="primary"
        flat
        class="q-ml-sm"
      />
    </div>
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      matType: 'print',
      callNum: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.q-radio--dark .q-radio__inner--active {
  color: #d17f48;
}
</style>
