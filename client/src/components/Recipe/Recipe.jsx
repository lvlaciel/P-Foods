import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css"



export default function Recipe({ image, name,id ,healthScore }) {
 
    return (
        <div className="recipeCard">
            <img className="img" src={image} alt="Not found" />
            <div className="name">
            <h2>{name}</h2>
            </div>

            <Link to={`/home/${id}`} key={id}>
                <button className="btnDetails"> More info </button>
            </Link>
            <div className="score">
            <img 
            src="https://pbs.twimg.com/profile_images/1932167208/logo.png" 
            alt="" 
            height="50"
            width="70"
            />
            <h1>{healthScore}</h1>
            
            </div>
        </div>

    );
};
            
            
            
            

                
            

