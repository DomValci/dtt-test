<template>
    <div class="CategoriesFood">
        <div class="foodSearch">
            
            <h4 id="header">Search for Food from two different categories 'branded' or 'common'</h4>                
            <form class="foodForm">

                <label for="foodType">Select Food Type</label>
                <select v-model="foodType">
                    <option v-for="(option,index) in options" :value="option.type" 
                    v-bind:key="(option,index)">
                        {{option.type}}
                    </option>
                </select>

                <label for="foodQuery">Enter Food Query</label>
                <input type="text" v-model.lazy="foodQuery">
                <button class="button-food" @click="getFood()">Search food</button>   
            
            </form>
        

            <div class="foodContainer">    

                <div v-for="(item, index) in foodInfo" 
                v-bind:key="(item,index)">
                    <div id="foodInfo">
                        <p>{{item.food_name.split(',')[0]}}</p>
                        <img :src="item.photo.thumb" alt="itemImg" width="auto" height="100px" id="photo">
                    </div> <!-- foodInfo -->
                </div> <!-- for all items from 'foodInfo' object-->

            </div> <!-- foodContainer -->

        </div>  <!-- foodSearch -->

    </div> <!-- CategoriesFood -->
</template>

<script>
export default {
    data() { 
        return {
            config: {
                headers: {
                    'x-app-id': 'd1bcf11d',
                    'x-app-key': '84c1b7fa584873b8afe60312db88d3e8'
                }
            },
            foodQuery: null, 
            foodInfo: null, 
            foodType: null,
            options: [
                { type:'branded' },
                { type:'common' },
            ],
        }
    },
    methods: {
        //getFood method returns data to 'foodInfo' by completing the GET url using 'foodQuery' user input  
        getFood: function() {
            axios
                .get('https://trackapi.nutritionix.com//v2/search/instant?query='+this.foodQuery+"'",this.config)
                .then(Response => {
                    if (this.foodType === 'branded'){
                        this.foodInfo = Response.data.branded
                    } else {
                        this.foodInfo = Response.data.common
                    }
                })
        }
    }
}


</script>

<style scoped>

.foodForm {
    display: grid;
    width: 40%;
    margin: 2% auto 2% auto;
    background-color: black;
}

.foodContainer {
    margin: 4% auto 4% auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}

#foodInfo {
    background-color: rgb(199, 199, 199);
    color: black;
    margin: 2%;
    display: grid;
    min-height: 250px;
}

#foodInfo:hover {
    background: linear-gradient(360deg, rgb(220, 255, 80) 0%, rgb(180, 205, 20) 25%, rgb(100, 150, 0) 50%,  rgb(40, 100, 0) 100%);
    color: white;
}

#photo {
    margin: 2% auto 2% auto;
}

.button-food{
    background-color: black;
    margin: 2% auto 2% auto;
    color: white;
    padding: 1em;
}
.button-food:active {
    background-color: rgb(0, 150, 0);
}

input[type=text] {
    background-color: lightgrey;
    font-size: 20px;
    border: 1ex solid white;
}

select {
    background-color: lightgrey;
    font-size: 20px;
    border: 1ex solid white;
}

#header {
    background-color: black;
    padding: 2%;
    margin: 2% auto;
}
@media (max-width: 632px) {
    * {
        font-size: 18px;
    }

    .foodForm {
        display: grid;
        width: 80%;
    }

    .foodSearch {
        display: block;
    }

    .foodContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
    }



    
    
}
</style>