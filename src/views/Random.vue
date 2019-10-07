<template>
    <div class="Random">
        <!-- header contains a button to call next random item-->
        <h1 id="header">Random Page</h1>
        
        <button class="nextRandomButton" @click="nextRand()">Next Item</button>
        <h1 id="header">{{info.food_name}}</h1>

        <!-- fullDetails container displays all relevent data from the random query response -->
        <div id="fullDetails" v-if="info.photo"
        key="response-photo">
            <!-- 'info contains a random query from the response. calling random index from info data object to randomize what item is displayed'-->
            <div id="photo"> 
                <img :src="info.photo.thumb" width="80%" height="auto" alt="mainImg">
            </div> <!-- photo -->
                <div id="textDetails">  
                    <h4>Brand - {{info.brand_name}}</h4>
                    <h4>Serving Unit - {{info.serving_unit}}</h4>
                    <h4>Serving Quantity - {{info.serving_qty}}</h4>
                    <h4>Calories - {{Math.round(info.nf_calories)}}</h4>
                </div> <!-- textDetails -->

        </div> <!-- fullDetails -->

        <div v-else>
            <h1>Loading</h1>
        </div>
       
        <Navigation/>
        <Footer/>
    </div> <!-- random -->
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'Random',
    components: {
        Footer,
        Navigation
    },

    data() {
        return {
            foods: ['banana', 'orange', 'strawberry', 'watermelon','pear', 'grape', 'berry', 'peach', 'fruit','grapefruit'],
            info: {},
            config: {
                headers: {
                    'x-app-id': 'd1bcf11d',
                    'x-app-key': '84c1b7fa584873b8afe60312db88d3e8'
                }
            },
            randomInt: Math.floor(Math.random() * 9 + 1),
            randomResponseItem: null
        }
    },
    
    methods: {
        nextRand: function() {
            // foods array contain 10 strings to be used as a query to the GET url, 'randomInt' generates random int in range of 0 to 9
            // e.g. foods[0] = 'banana' / axios.get(url?query=banana)
            
            axios
                .get('https://trackapi.nutritionix.com//v2/search/instant?query=' +this.foods[this.randomInt]+"'", this.config)
                .then(Response => {
                    this.randomInt = Math.floor(Math.random() * (this.foods.length - 1) + 1)
                    this.randomResponseItem = Math.floor(Math.random() * (Response.data.branded.length - 1) + 1)
                    this.info = Response.data.branded[this.randomResponseItem]
                })
        },
    },
    //created function to get data before template is rendered
    created() {
        axios
            .get('https://trackapi.nutritionix.com//v2/search/instant?query='+this.foods[this.randomInt]+"'",this.config)
            .then( Response => {
                this.randomInt = Math.floor(Math.random() * (this.foods.length-1) + 1 )
                this.randomResponseItem = Math.floor(Math.random() * (Response.data.branded.length-1) + 1 )
                this.info = Response.data.branded[this.randomResponseItem]
            })
    
    }
}


</script>

<style scoped>

.Random {
    padding-bottom: 5%;
}

#header {
    background-color: black;
    width: 100%;
}

.nextRandomButton {
    margin: 2% auto 2% auto;
    padding: 20px;
    background-color: black;
    font-size: 20px;
    color: white;
}

.nextRandomButton:active {
    background-color: rgb(0, 150, 0);
}

#fullDetails {
    width: 90%;
    margin: 5% auto 5% auto;
    color: black;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    background: linear-gradient(90deg, rgb(220, 255, 80) 0%, rgb(100, 205, 20) 25%, rgb(0, 150, 0) 50%,rgb(100, 205, 20) 75%,  rgb(220, 255, 80) 100%);    
}

#textDetails {
    margin: auto 0 auto 0;
    text-align: left;
    padding-left: 10%;
    background-color: rgb(199, 199, 199);
}

@media screen and (max-width:640px) {
    #fullDetails {
        margin: 5% auto 5% auto;
        color: black;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        background-color: rgb(200, 200, 200);
    }
    #textDetails {
        text-align: center;
        padding: 0;
    }

    #photo {
        margin: 5%;
    }


}

</style>
