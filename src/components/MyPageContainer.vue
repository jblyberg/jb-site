<template>
  <div class="my-page-container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.my-page-container {
  padding: 20px 30px 0px 30px;
}

h3 {
  font-size: 1.7rem;
  font-family: 'Englebert', sans-serif;
  color: #f0a937;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.4rem;
  }
}
</style>
