<template>
    <!-- detail container displays relevent item details  -->
    <div class="detailsPage">
        
        <h1 id="header">{{response.food_name}}</h1>
        <div class="detailContainer">

            <div id="photo" v-if="response.photo" 
            key="response-status">
                <img :src="response.photo.thumb" alt="mainImg" width="80%" height="auto">
            </div> <!-- photo -->

            <div v-else>
                <h2>Loading</h2>
            </div>
                
        
            <div id="fullDetails">
                <h4>Brand - {{response.brand_name_item_name}}</h4>
                <h4>Serving Unit - {{response.serving_unit}}</h4>
                <h4>Serving Quantity - {{response.serving_qty}}</h4>
                <h4>Calories - {{Math.round(response.nf_calories)}} </h4>
            </div><!-- full details -->
                


        </div> <!-- detail container -->


        <h1 id="header">Relevent Items</h1>
        
        <div id="releventDetailContainer" v-if="releventItems[0] != null"
        key="relevent-items-object">
            <!-- for object in releventItems array (contains 3 relevent data objects) -->
            <div id="releventItem" v-for="(item, index) in releventItems" 
                v-bind:key="(item,index)">

                    <p>{{item.food_name}}</p>
                    <img :src="item.photo.thumb" alt="relevent" width="80%" height="auto">
                    <p>Serving Unit: {{item.serving_unit}}</p>
                    <p>Serving Quantity: {{item.serving_qty}}</p> <!-- to fixed decimal point for formating -->
                    <p>Calories: {{Math.round(item.nf_calories)}}</p> <!-- rounded calories -->
            
            </div>  <!-- releventItem -->

            

        </div>  <!-- releventDetailContainer -->

        <div v-else>
            <h1>Loading</h1>
        </div>
        <Navigation/>
        <Footer/>

    </div>
    
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'detailsPage',
    components: {
        Navigation,
        Footer
    },
    data() {
        return {
            config: {
                headers: {
                    'x-app-id': 'd1bcf11d',
                    'x-app-key': '84c1b7fa584873b8afe60312db88d3e8'
                }
            },
            response: {},
            releventItems: [null,null,null],
       }
    },
    
    // using created function to get all relevent data before template is rendered
    created () {
    
        axios
            // this get request completes the url using a global router parameter as a query
            .get('https://trackapi.nutritionix.com//v2/search/instant?query='+this.$route.params.food_name, this.config)
            .then(Response => {
                this.response = Response.data.branded[0]
                this.releventItems[0] = Response.data.branded[1]
                this.releventItems[1] = Response.data.branded[2]
                this.releventItems[2] = Response.data.branded[3]
            })
            
        
    },
}
</script>


<style scoped>

.details {
    margin: 0 auto;
}

.detailContainer {
    width: 90%;
    margin: 5% auto 5% auto;
    color: black;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    background: linear-gradient(90deg, rgb(220, 255, 80) 0%, rgb(100, 205, 20) 25%, rgb(0, 150, 0) 50%,rgb(100, 205, 20) 75%,  rgb(220, 255, 80) 100%);    
}

#fullDetails {
    width: 90%;
    margin: auto;
    text-align: left;
    background-color: rgb(200, 200, 200);
    padding-left: 10%;
}


#header {
    background-color: black;
    width: 100%;
}

#releventDetailContainer {
    margin: 20px auto 20px auto;
    width: 90%;
    display: flex;
    align-items: stretch;
}

#releventItem {
    margin: 2% auto 4% auto;
    width: 300px;
    background-color: rgb(128, 72, 0);
}

@media (max-width:632px) {
    .detailContainer {
        width: 90%;
        margin: 5% auto 5% auto;
        color: black;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr ;
    }

    #fullDetails {
        text-align: center;
        width: 100%;
        padding: 0%;
    }
    
    #releventDetailContainer {
        text-align: center;
        display: inline-block;
    }

    #photo {
        margin: 5%;
    }
}
    
</style>