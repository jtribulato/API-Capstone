const RECIPE_COMPLEX_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex";
let recipes = [];
let queryObject = {
  cuisine: "american",
  diet: "",
  intolerances: [],
  fillIngredients: true,
  instructionsRequired: true,
  addRecipeInformation: true,
  query: "hamburger",
  offset: 0
};


const settings = {
    url: RECIPE_COMPLEX_URL,
    data: queryObject,
    headers: {
      "X-Mashape-Key": "IUGi5Z89cemshooIekxfGjDuG9dgp1Vbya9jsniIa76bJFYNXx",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    },
    dataType: "json",
    type: "GET",
    success: function(data){
       console.log('how many steps: ' + data.results[0].analyzedInstructions[0].steps.length);  //  nope
       console.log('AggregateLikes: ' + data.results[0].aggregateLikes); //ok
       console.log('Title: ' + data.results[0].title);  //ok
       console.log('Base image link: ' + data.baseUri);  // ok
       console.log('Recipe image: ' + data.results[0].image);  // ok
       console.log('CreditText: ' + data.results[0].creditText);  // ok
       console.log('Cuisines: ' + data.results[0].cuisines);  // ok
       console.log('Gluten Free: ' + data.results[0].glutenFree);  // ok
       
       console.log('Step 1: ' + data.results[0].analyzedInstructions[0].steps[0].step) ; // ok
       console.log('Step 2: ' + data.results[0].analyzedInstructions[0].steps[1].step) ;//  ok
       console.log('Step 3: ' + data.results[0].analyzedInstructions[0].steps[2].step) ; // ok
       console.log('Step 4: ' + data.results[0].analyzedInstructions[0].steps[3].step) ;//  ok
       console.log('Step 5: ' + data.results[0].analyzedInstructions[0].steps[4].step); //  ok
      //console.log('Step 6: ' + data.results[0].analyzedInstructions[0].steps[54].step); //  ok
         
           let lastStep = "end";
           console.log(lastStep)
        
    },
    error: function(err) {
      console.log(err);
    }
  };
  $.ajax(settings);