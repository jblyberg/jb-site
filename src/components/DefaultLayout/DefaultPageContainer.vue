<template>
  <div class="my-page-container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-page-container {
  padding: 40px 110px 0px 30px;
  @media (max-width: 900px) {
    padding: 40px 30px 0px 30px;
  }
}

.page-title {
  padding-bottom: 30px;
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
    line-height: 1.7rem;
    font-size: 1.6rem;
  }
}

h4 {
  font-size: 1.5rem;
  font-family: 'Englebert', sans-serif;
  color: #d17f48;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
}

h5 {
  font-size: 1.3rem;
  font-family: 'Englebert', sans-serif;
  color: #d17f48;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }
}

h6 {
  font-size: 1.1rem;
  font-family: 'Englebert', sans-serif;
  color: #d17f48;
  margin: 0;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
}
</style>
