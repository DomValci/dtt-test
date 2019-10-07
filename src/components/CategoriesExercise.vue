<template>
    <div class="CategoriesExercise">
        <form>
            <h4 id="header">Fill out the following form </h4>
            <ul class="formContainer">                        
                <li class="form-row">
                    <label for="exerciseQuery" class="form-row"> Exercise 
                        <input type="text" v-model="exercise" placeholder="ran 2 miles" class="form-row" id="text-input">
                    </label>
                </li>

                <li class="form-row">
                    <label for="gender"> Gender 
                        <select v-model="gender" class="form-row"  id="text-input"> 
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                </li>

                <li class="form-row">
                    <label for="weight" class="form-row"> Weight (Kg) 
                        <input type="text" v-model="weight" placeholder="82" class="form-row" id="text-input">
                    </label>
                </li>

                <li class="form-row">
                    <label for="height" class="form-row"> Height (cm) 
                        <input type="text" v-model="height" placeholder="182" class="form-row" id="text-input">
                    </label>
                </li>

                <li class="form-row">
                    <label for="age" class="form-row"> Age           
                        <input type="text" v-model="age" placeholder="22" class="form-row" id="text-input">
                    </label>
                </li>

                <button class="button-exercise" @click="postExercise()">get exercise</button>
            </ul>
        </form>

        
        <span v-if="exerciseInfo" key="exerciseData">
            <h4 id="header">Exercise Info</h4>
            <div class="exerciseInfo" v-for="(ex, index) in exerciseInfo" 
            v-bind:key="(ex, index)">
                <span id="exercise-Info-block">Exercise Name <h2>{{ex[0].name}}</h2></span> 
                <span id="exercise-Info-block">Duration (min) <h2>{{Math.round(ex[0].duration_min)}}</h2> </span>
                <span id="exercise-Info-block"><a id="link" href="https://en.wikipedia.org/wiki/Calorie"> Calories Burned </a> <h2>{{Math.round(ex[0].nf_calories)}}</h2> </span>
                <span id="exercise-Info-block"><a id="link" href="https://en.wikipedia.org/wiki/Metabolic_equivalent_of_task">Metabolic Equivalent of Task</a> <h2>{{ex[0].met}}</h2> </span>
            </div> <!-- exerciseInfo-->
        </span>
    </div> <!-- CategoriesExercise -->

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
            exercise: 'ran 2 miles',
            gender: 'male',
            weight: '92',
            height: '182',
            age: '22',
            exerciseInfo: null,
        }
    },
    methods: {
        postExercise: function() {
            axios
                .post('https://trackapi.nutritionix.com/v2/natural/exercise', 
                    {
                        "query": this.exercise,
                        "gender": this.gender,
                        "weight_kg": this.weight,
                        "height_cm": this.height,
                        "age": this.age
                    }, this.config)

                .then(Response => {
                    this.exerciseInfo = Response.data
                })
        }
    }
}
</script>

<style scoped>

.CategoriesExercise {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 1fr;
}

.formContainer {
    list-style-type: none;
    display: grid;
    margin: 2%;
    background-color: black;

}

.form-row {
    margin: 2% auto 2% auto;
    width: 10em;
    float: left;
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

#link {
    color: black;
}

.exerciseSearch {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
}

.exerciseInfo {
    background-color: black;
    display: grid;
    grid-template-rows: 2fr 2fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2%;
    margin: 2%;
    padding: 1em;
    margin-top: 25%;
}

#exercise-Info-block {
    display: block;
    font-size: 18px;
    background-color: rgb(0, 150, 0);
    text-align: center;
}

.button-exercise {
    background-color: black;
    margin: 2% auto 2% auto;
    color: white;
    padding: 1em;
}

.button-exercise:active {
    background-color: rgb(0, 150, 0);
}

#header {
    background-color: black;
    padding: 2%;
    margin: 2% auto;
}

@media (max-width: 632px) {

    .CategoriesExercise {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
    .exerciseSearch {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        text-align: left;
    }
   
    .form-row {
        text-align: left;
        width: 8em;
    }
   
    #title {
        text-align: center;
    }

}

</style>