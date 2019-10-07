<template>
  <div class="App"> 
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}   
  }
}
</script>


<style>

.App {
  text-align: center;
  font-family: 'Verdana';
  color: white;
  background-image: url(assets/bg.jpg);
  background-size: cover;
  margin: -1ex;
  min-height: 100vh;
  padding-top: 2em;
}


</style>


<!--

- Some HTML tags don't have all required properties

- The styling isn't written according to recommendations of VueJS



https://vuejs.org/v2/style-guide/#Rule-Categories
-->
