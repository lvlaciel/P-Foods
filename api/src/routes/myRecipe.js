const { Router } = require('express');
const { Recipe, Diet } = require('../db.js')

const router = Router();


router.post("/", async (req, res, next) => {
    const {name,summary,steps,score,healthScore,dietTypes,image} = req.body
    try {
         let newRecipe = await Recipe.create({
            name,
            summary,
            steps,
            score,
            healthScore,
            image,
        });
        let dbDiets = await Diet.findAll({
            where: {
                name:
                dietTypes
            }
        })
        newRecipe.addDiet(dbDiets)
        res.send(newRecipe);
    } catch (e) {
        next(e)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        await Recipe.destroy({
            where: {
                id: id
            }
        })
        res.send("Deleted")
    } catch (e) {
        next(e)
    }
});

router.put("/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { name, summary, steps, score, healthScore, image } = req.body
        const response = await Recipe.update(
            {
                name: name,
                summary: summary,
                steps: steps,
                score: score,
                healthScore: healthScore,
                image: image
            },
            { where: { id: id } }
        )
        res.send(`${response} done`)
    } catch (e) {
        res.send(e)
    }
});





module.exports = router;