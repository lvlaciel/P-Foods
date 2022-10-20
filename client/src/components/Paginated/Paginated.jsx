import React from "react";
import "./Paginated.css"

export default function Paginated({theRecipes, recipesPerPage, thePaging,paginated, nextPage, previousPage}){
    
    const thePagings = [];

    for (let i = 1; i <= Math.ceil(theRecipes/recipesPerPage) ; i++) {
        thePagings.push(i)
    };
    
    const handleClick = (number)=>{
        thePaging(number)
    }
    return (
        <div className="itemsPages">
            <button className="arrowPage"disabled={paginated === 1} onClick={()=>previousPage()}> ↩ </button>
            {thePagings && thePagings.map(number => (
                <button className="btnPage" key={number} onClick={() => handleClick(number)}>{number}</button>
                ))}
            
            <button className="arrowPage"disabled={paginated >= Math.ceil(theRecipes / recipesPerPage)} onClick={()=>nextPage()}> ↪ </button>
        </div>
    );
};


            
            
                    


           

        

            

                