import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../actions";
import Recipe from "../Recipe/Recipe";
import  Paginated  from "../Paginated/Paginated"
import  Loading  from "../Loading/Loading.jsx"
import "./Home.css"
import NavBar from "../NavBar/NavBar";
import Presentation from "../Presentation/Presentation";


export default function MyHome(){
    
    let key = 1;
    const dispatch = useDispatch();
    let theRecipes = useSelector((state)=> state.recipes);
    

    let [paginated, setPaginated] = useState(1);
    let [recipesPerPage] = useState(9);
    
    const lastRecipeLocation = paginated * recipesPerPage;
    const firstRecipeLocation = lastRecipeLocation - recipesPerPage;
    const recipesPages = theRecipes.slice(firstRecipeLocation, lastRecipeLocation);

    const nextPage = function (){
         setPaginated(paginated+1)
    }
    const previousPage = function (){
         setPaginated(paginated-1)
    }

    const thePaging = (pageNumber)=>{
        setPaginated(pageNumber);
    };


    useEffect(()=> {
         dispatch(getRecipes())
    },[dispatch]);



    return (
        <div className="principalDiv">
            <nav className="nav">
                <div className="navBar">
                    <NavBar />
                </div>
                <div className="presentation">
                    <Presentation />
                </div>
            

            </nav>
            <div className="Paginated">
            <Paginated
                theRecipes={theRecipes.length}
                paginated={paginated}
                recipesPerPage={recipesPerPage}
                thePaging={thePaging}
                nextPage={nextPage}
                previousPage={previousPage}
                />

            </div>
           
            <div className="CardsRecipes">
                {theRecipes.length ? recipesPages?.map(element => {
                    return <Recipe
                        name={element.name}
                        key={key++}
                        image={element.image}
                        dietTypes={element.dietTypes}
                        id={element.id}
                        healthScore={element.healthScore}
                    />
                }) : <Loading />}
            </div>
        </div>
    );
};
