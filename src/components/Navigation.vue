<!-- Navigation bar fixed to top with required links -->
<template>
  <div class="Navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-link to="/random">Random</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}

</script>

<style scoped>
a {
  display: block;
  float: left;
  color: white;
  text-decoration: none;
  padding: 1em;
}

a:hover {
  display: block;
  background-color:rgb(0, 100, 0);
}

.Navigation {
  position: fixed;
  background-color:rgb(0, 115, 5);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

</style>
