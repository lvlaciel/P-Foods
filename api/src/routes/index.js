const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes  = require ('./recipes.js');
const diets  = require ( './diets.js' );
const myRecipe  = require ( './myRecipe.js' )

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipes);
router.use("/diets", diets);
router.use("/myRecipe", myRecipe);
        



module.exports = router;
