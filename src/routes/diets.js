const { Router } = require('express');
const { Diet } = require("../db.js");

const router = Router();


const fromApiToDbDiets = [
"gluten free",
"ketogenic",
"vegetarian",
"lacto vegetarian",
"ovo vegetarian",
"lacto ovo vegetarian",
"vegan",
"pescetarian",
"paleolithic",
"primal",
"fodmap friendly",
"whole 30",
"dairy free"
]
router.get("/", async(req,res) => {
    try{
    fromApiToDbDiets.forEach(el => {
        Diet.findOrCreate({
            where:{name : el}
        })
    });
    let dietTypes = await Diet.findAll();
    res.send(dietTypes)
    }catch(e){
        console.log(e)
    }
});

    
module.exports = router;



