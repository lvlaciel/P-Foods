import React from "react";
import { getRecipeByName, getRecipes } from "../../actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2"
import "./SearchBar.css"


export function SearchBar () {
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const theAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect search',
            icon: 'error',
            imageUrl: 'https://i.ytimg.com/vi/l4FH6NoMkE4/maxresdefault.jpg',
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: 'OK'

        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(input === "") theAlert()
       
        if(Number(input)) theAlert()
        
        dispatch(getRecipeByName(input))
        
        setInput("")
    };
    
         

    const onChange = (e)=>{
        setInput(e.target.value)
    };

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes(input))
        setInput("")
    }

    return(
        <div className="SearchBar">
            <form className="form_cotainerBar" onSubmit={e => onSubmit(e)}>
                <input className="recipeInput"
                type="text" 
                placeholder="🔍 What are you looking for...?"
                value={input}
                onChange={ e => onChange(e)}
                />
                <button className="Searcher" type="submit"> Search </button>
                
            </form>
                <div>
                <button className="reload" onClick={e => handleClick(e)}>
                    <img 
                    src="https://th.bing.com/th/id/R.e08b0f6b925888e929dffe8d2c2c5357?rik=%2foEldeE3oOuM0Q&pid=ImgRaw&r=0" 
                    alt="" 
                    width="50"
                    height="40"
                    />
                    <span> Reload Recipes
                    </span>
                </button>
               </div>
        </div>
    )
};
            