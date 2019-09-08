<template>
    <div class="detailContainer">
        <h1>{{response.food_name}}</h1>

        <div id="fullDetails">
            
            <img :src="response.photo.thumb" style='max-height: 100%; width:400px;'>
            
            <div id="textDetails">                <h3>Brand: {{response.brand_name}}</h3>
                <h3>Serving Unit: {{response.serving_unit}}</h3>
                <h3>Serving Quantity: {{response.serving_qty}}</h3>
                <h3>Calories: {{response.nf_calories}}</h3>
            </div>
            


            <div id="ReleventDetailContainer">

                    <div id="releventItem" v-for="item in releventItems" v-bind:key="item">
                        <img :src="item.photo.thumb" width="100" height="100">
                        <h3>Food Name: {{item.food_name}}</h3>
                        <h3>Serving Unit: {{item.serving_unit}}</h3>
                        <h3>Serving Quantity: {{item.serving_qty}}</h3>
                        <h3>Calories: {{item.nf_calories}}</h3>
                           
                    </div>
            </div>

        </div>

        <Navigation/>
        <Footer/>

    </div>

        


        
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
export default({
    name: 'detailContainer',
    components: {
        Navigation,
        Footer
    },
    data() {
        return {
            response: {},
            releventItems: [Object,Object,Object],
            id: '',

       }
    },

    created () {
        var config = {
            headers: {
                'x-app-id': 'd1bcf11d',
                'x-app-key': '84c1b7fa584873b8afe60312db88d3e8'
            }
        };

        axios
            .get('https://trackapi.nutritionix.com/v2/search/instant?query='+this.$route.params.food_name,config)
            .then(Response => {
                this.response = Response.data.branded[0]
                this.releventItems[0] = Response.data.branded[1]
                this.releventItems[1] = Response.data.branded[2]
                this.releventItems[2] = Response.data.branded[3]

            })
           
            .catch(error => console.log(error))
        
    },
})
</script>

<style>
    *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    img {
        object-fit: contain;
        width: 100%;
        overflow: hidden;
    }

    #mainImg {
        width: 400px;
        height: 400px;
        max-height: 600px;
        max-width: 600px;
        
    }
    .detailContainer {
        margin: 0;
        text-align: center;
        border: 2px solid red;
        background-color: violet;
        

    }
    #fullDetails {
        width: 90%;
        margin: 0 auto;
        
    }
    #textDetails {
        background-color: aqua;
    }
    #ReleventDetailContainer {
        background-color: chartreuse;
    }
    #releventItem {
        border:2px dotted black;
        width: 300px;
        height: 300px;
        display: inline-block;
        margin: 2em;

    }
    
</style>