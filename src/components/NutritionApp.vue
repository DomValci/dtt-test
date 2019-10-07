<template>
  <div class="Nutrition">

    <div class="homeHeader">
      <h1>Welcome</h1>
      <h2>This App is powered by Nutrtionix API</h2>
      <h3><em>Our goal is to make it easier to understand what you eat. Through our interactive nutrition tools and world-renowned nutrition database, we help millions of consumers understand nutrition every single day. </em></h3>
      
      <div id="sortButtons">
        <button class="button-sort" @click="sortByName(info)">Sort By Name</button>
        <button class="button-sort" @click="sortByCalories(info)">Sort By Calories</button>
      </div> <!-- sortButtons -->
      
    </div> <!-- homeHeader -->

    
    <!-- foodContainer contains response data from the API -->
    <div id="foodContainer">
      <div id="detail" v-for="(data, index) in info" 
        v-bind:key="(data,index)">
        
        <!-- router link to the details page including router param to the relevant item -->
        <router-link :to="'details/'+data.food_name"> 
        <!-- container for individual response data item -->
          <p>{{data.food_name.split(',')[0]}}</p> <!-- some food names are too long (20+ characters), this made the detail div streatch -->
          <img :src=data.photo.thumb alt="smallResponseImg" width="100px" height="auto">
          <h4>{{Math.round(data.nf_calories)}}</h4> <!-- some calorie data items are flaots with 10+ decimal points -->
        </router-link>

      </div> <!-- detail -->
    </div> <!-- foodContainer -->

  </div> <!-- Nutrition -->
  
</template>

<script>

export default {
  name: 'Nutrition',
  data () {
    return {
      config: {
        headers: {
          'x-app-id': 'd1bcf11d',
          'x-app-key': '84c1b7fa584873b8afe60312db88d3e8'
        }
      },
      info: {},
    }
  },

  // methods for the two sorting button. Each method takes response data object 'info' and sorts the data accordingly 
  methods: {
    sortByName: function(obj) {
      obj.sort(function(a,b){
        return a.food_name > b.food_name
      })
    },

    sortByCalories: function(obj) {
      obj.sort(function(a,b){
        return a.nf_calories > b.nf_calories
      })
    }

  },

  
  created () {
    //axios GET request stores response data to the 'info' data object
    axios
      .get('https://trackapi.nutritionix.com//v2/search/instant?query=fruit', this.config)
      .then(Response => { this.info = Response.data.branded })
  }
  
}

</script>


<style scoped>

.Nutrition {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

.homeHeader {
  background-color: black;
  opacity:0.8;
  margin: 5%;
}

#foodContainer {
  margin: 5% auto 5% auto;
  background: linear-gradient(90deg, rgb(220, 255, 80) 0%, rgb(100, 205, 20) 25%, rgb(0, 150, 0) 50%,rgb(100, 205, 20) 75%,  rgb(220, 255, 80) 100%);    
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

#detail {
  background-color: rgb(199, 199, 199);
  color: white;
  margin: 2%;
  display: grid;

}

#detail a {
  text-decoration: none;
  color: black;
}

#detail a:hover {
  background: linear-gradient(360deg, rgb(220, 255, 80) 0%, rgb(180, 205, 20) 25%, rgb(100, 150, 0) 50%,  rgb(40, 100, 0) 100%);
  color: white;
}

@media screen and (max-width:640px) {
  * {
        font-size: 18px;
    }
  #foodContainer {
    background-color: green;
    color: white;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  } 
}

.button-sort {
  margin: 2% auto 2% auto;
  padding: 20px;
  background-color: black;
  font-size: 20px;
  color: white;
}

.button-sort:focus {
  background-color:rgb(0, 115, 5);
}

</style>
