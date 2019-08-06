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
  @media (min-width: 900px) {
    padding: 20px 100px 0px 30px;
  }
}

h1 {
  font-size: 2.6rem;
  font-family: 'Englebert', sans-serif;
  color: #f0a937;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
}

h2 {
  font-size: 2rem;
  font-family: 'Englebert', sans-serif;
  color: #f0a937;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.8rem;
  }
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

h4 {
  font-size: 1.4rem;
  font-family: 'Englebert', sans-serif;
  color: #d65128;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
}

h5 {
  font-size: 1.1rem;
  font-family: 'Englebert', sans-serif;
  color: #d65128;
  margin: 0;
  // @media (max-width: 900px) {
  //   font-size: 0.8rem;
  // }
}

h6 {
  font-size: 16px;
  font-family: 'Englebert', sans-serif;
  color: #d65128;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 16px;
  }
}
</style>
