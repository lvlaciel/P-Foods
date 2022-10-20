require('dotenv').config();
const { Router } = require('express');
const { API_KEY, API_KEY2, API_KEY3, API_KEY4, 
        API_KEY5, API_KEY6, API_KEY7, API_KEY8, 
        API_KEY9, API_KEY10, API_KEY11, API_KEY12,
        API_KEY13, API_KEY14, API_KEY15
      } = process.env
const { Recipe, Diet } = require('../db.js')
const axios = require ('axios')

const router = Router();

//console.log('MI API KEY',API_KEY)

const myApiData = async function () {
    const myApi = await axios.get(`https://api.spoonacular.com//recipes/complexSearch?apiKey=${API_KEY3}&addRecipeInformation=true&number=100`)
    .then(r => r.data.results)
    let resultsApi = myApi?.map(res => {
      return {
        id: res.id,
        name: res.title,
        summary: res.summary,
        healthScore: res.healthScore,
        score: res.spoonacularScore,
        dietTypes: res.diets,
        dishType: res.dishTypes,
        vegetarian: res.vegetarian,
        vegan: res.vegan,
        glutenFree: res.glutenFree,
        dairyFree: res.dairyFree,
        cuisines: res.cuisines.map(el => el),
        aggregateLikes: res.aggregateLikes,
        readyInMinutes: res.readyInMinutes,
        image: res.image,
        steps: res.analyzedInstructions[0]?.steps.map(el => {
          return {
            number: el.number,
            step: el.step,
          };
        })
      };
    });
   return resultsApi;
  };
  
const myDBdata = async()=> {
      try {
         let resultDB = await Recipe.findAll({
          include:{
              model: Diet,
              attributes: ["name"],
              through:{
                  attributes:[],
              }
          }
        })
          let inDb = await resultDB?.map(res => {
            return {
                id: res.id,
                name: res.name,
                summary: res.summary,
                healthScore: res.healthScore,
                steps: res.steps,
                image: res.image,
                score: res.score,
                createdInDb: res.createdInDb,
                dietTypes: res.diets ? res.diets : res.diets.map(el => el.name)
            }
          });
          return inDb;
      } catch (e) {
          console.log(e)
      };
  };
  
const myTotalData = async()=> {
      try {
          const apiData = await myApiData();
          const dbData = await myDBdata();
          const totalData = apiData.concat(dbData);
          return totalData;
      } catch (e) {
          console.log(e);
      }
  };
          
router.get("/", async (req, res) => {
  const { name } = req.query
  let allRecipes = await myTotalData();
  if (name) {
    let nameRecipe = await allRecipes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
    if (nameRecipe.length) res.status(200).send(nameRecipe)
    else if (!nameRecipe.length) res.status(404).send("Recipe not found")
  } else {
    res.status(200).send(allRecipes);
  }
});
  
router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    let allRecipes = await myTotalData();
    if (id) {
      let idRecipe = await allRecipes.filter(el => el.id == id)
      idRecipe.length ?
        res.status(200).send(idRecipe) :
        res.status(404).send("Recipe not found")
    }
  } catch (e) {
    console.log(e)
  }
});




module.exports = router;
