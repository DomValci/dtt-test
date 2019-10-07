<!-- generated sitemap using Vue router -->
<template>
  <div class="Footer">
    <div id="container">
      <ul v-for="(site, path) in sitemap" 
      v-bind:key="(site,path)">
        <li>
          <router-link id="link" :to="site.path" > {{site.name}} </router-link> 
        </li>
      </ul>
    </div> <!-- container -->
  </div> <!-- Footer -->
</template>

<script>
import router from '../router';

export default {
  name: 'Footer',
  data() {
      return {
        sitemap: []
      }
  },

  created() {
  // for each route in $router.options.routes add each route to the sitemap array
    this.$router.options.routes.forEach(route => {
      this.sitemap.push({
        name: route.name,
        path: route.path
      })
    })
  },

}
</script>

<style>

.Footer {
  bottom: 0;
  left: 0;
  width: 100%;
  position: fixed;
  display: inline-block;
  background-color: rgb(220, 255, 80);
}

#link {
  display: block;
  text-decoration: none;
  color: black;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  margin: 10px;
}


</style>
