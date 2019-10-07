<template>
    <div class="Categories">
        <div id="header">
            <h1> Categories page</h1>
            <!-- binded radio inputs to 'APIendPoint' will rended coresponding component -->

            <div>
                <input type="radio" value="Food" v-model="APIendPoint">
                <label for="food">Food</label>

                <input type="radio" value="Exercise" v-model="APIendPoint">
                <label for="exercise">Exercise</label>
            </div>

        </div>

        <div class="container">

            <div v-show="APIendPoint === 'Food'">
                <CategoriesFood/>
            </div>
            
            <div v-show="APIendPoint === 'Exercise'" class="exerciseSearch">
                <CategoriesExercise/>
            </div>

        </div> <!-- container -->

    <Navigation/>
    <Footer/>
    </div> <!-- Categories -->
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navigation from '@/components/Navigation.vue';
import CategoriesFood from '@/components/CategoriesFood.vue';
import CategoriesExercise from '@/components/CategoriesExercise.vue';

export default {
    name: 'Categories',
    components: {
        Footer,
        Navigation,
        CategoriesFood,
        CategoriesExercise
    },

    data() {
        return {
            APIendPoint: null,
        }
    }
}
</script>

<style scoped>

.Categories {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
}

.container {
    font-size: 22px;
    width: 80%;
    margin: 4% auto 4% auto;
    background: linear-gradient(90deg, rgb(220, 255, 80) 0%, rgb(100, 205, 20) 25%, rgb(0, 150, 0) 50%,rgb(100, 205, 20) 75%,  rgb(220, 255, 80) 100%);    

}

#header {
    background-color: black;
    padding: 2em;
    margin: 2% 0 2% 0; 
}


.button-food{
    background-color: black;
    margin: 2% auto 2% auto;
    color: white;
    padding: 1em;
}
.button-exercise {
    margin: 5% auto 0 auto;
    padding: 2%;
    background-color: black;
    color: white;
}

.button-exercise:active {
    margin: 5% auto 0 auto;
    padding: 2%;
    color: white;
}


@media (max-width:632px) {

}
</style>