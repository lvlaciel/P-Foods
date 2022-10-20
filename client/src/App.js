import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import landingPage from "./components/Landing/LandingPage.jsx"
import myHome from "./components/Home/Home.jsx";
import recipeDetails  from "./components/RecipeDetails/RecipeDetails.jsx"
import addRecipe  from './components/CreateRecipe/AddRecipe';




function App() {
  return (
    <div className="App">
        <Route exact path="/" component={landingPage} />
        <Route exact path="/home" component={myHome} />
        <Route exact path="/home/:id" component={recipeDetails}/>
        <Route exact path="/myRecipe" component={addRecipe}/>
    </div>
  );
};
        
     



export default App;




