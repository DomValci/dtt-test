<!-- added vue Components to Home.vue -->
<template>
  <div class="Home">
    <Navigation/>
    <NutritionApp/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import NutritionApp from '@/components/NutritionApp.vue';

export default {
  name: 'Home',
  components: {
    NutritionApp,
    Navigation,
    Footer
  },
}

</script>
