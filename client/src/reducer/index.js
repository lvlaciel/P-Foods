
import {
    GET_RECIPES,
    GET_RECIPE_BY_NAME,
    GET_RECIPE_BY_ID,
    GET_DIET,
    FILTER_BY_DIET,
    ALPHABETIC_ORDER,
    ORDER_HEALTH_SCORE,
    ADD_RECIPE,
    CLEAR_DETAILS,
    FILTER_DB_API,
    DELETE_RECIPE,
    UPDATE_RECIPE

} from "../actions/index"

const initialState = {
    recipes : [],
    allRecipes : [],
    typeOfDiet: [],
    recipeDetails: {},
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            };
        case GET_RECIPE_BY_NAME:
            return {
                ...state,
                recipes: action.payload
            };
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipeDetails: action.payload
            };

        case GET_DIET:
            return {
                ...state,
                typeOfDiet: action.payload
            };
        case FILTER_BY_DIET:
            let allRecipesState = state.allRecipes; // [{r},{r1},{r2}]
            let myDiets = action.payload === "all" ? allRecipesState ? allRecipesState : null //si dietas api coincide con "all" = allRecipesState // sino nulo  
                : allRecipesState.filter(el => el.dietTypes?.some(d => d.name 
                    ? d.name === action.payload // pero si se crea es un array de obj.name
                    : d === action.payload)) //  si es de la api es un array de strings
                        // por eso se devuelve un caso .name o un caso del elemento
                        // Tendria array filtrado con la dieta dependiente de AP
            let vegetarianRecipes = [] // allRecipes vegetarian
            for (let i = 0; i < allRecipesState.length; i++) {
                if (allRecipesState[i].vegetarian === true) {
                    vegetarianRecipes.push(allRecipesState[i])
                };
            }
            let noVegetarianDiets = [] // todas las recipes No vegetarian
            myDiets.forEach(el => {
                if (!vegetarianRecipes.includes(el)) {
                    noVegetarianDiets.push(el)
                };
            });
            vegetarianRecipes.forEach(el => {
                if (!myDiets.includes(el)) {
                    noVegetarianDiets.push(el);
                }
            });
            return {
                ...state,
                recipes: action.payload === "vegetarian" ? noVegetarianDiets : myDiets
            };
        case ALPHABETIC_ORDER:
            let recipesOrderAsc = [...state.recipes];
            recipesOrderAsc.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return action.payload === 'asc' ? -1 : 1
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return action.payload === 'asc' ? 1 : -1
                }
                return 0;
            });
            return {
                ...state,
                recipes: recipesOrderAsc
            };
        case ORDER_HEALTH_SCORE:
            let orderByScore = [...state.recipes];
            let orderByHscore =
                action.payload === "asc"
                    ? orderByScore.sort((a, b) => {
                        return a.healthScore - b.healthScore
                    })
                    : orderByScore.sort((a, b) => {
                        return b.healthScore - a.healthScore
                    })

            return {
                ...state,
                recipes: orderByHscore,
            };

        case ADD_RECIPE:
            return {
                ...state,
            }
        case DELETE_RECIPE:
            return {
                ...state,
            }
        case UPDATE_RECIPE:
            return {
                ...state
            }
        case CLEAR_DETAILS:
            return {
                ...state,
                recipeDetails: {}
            }
        case FILTER_DB_API:
            const createdFilter = action.payload === "dataBase" ? state.allRecipes.filter(rec => rec.createdInDb) : state.allRecipes.filter(rec => !rec.createdInDb)
            return {
                ...state,
                recipes: action.payload === "all" ? state.recipes : createdFilter
            }
            default:
                return state
            };
        };




    
                