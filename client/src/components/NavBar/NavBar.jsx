import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import {OrderAlphabeticFunction} from "../AlphabeticalOrder/OrderAlphabetic";
import { FilteredByDiets } from "../FiltersbyDiet/FilterbyDiets.jsx";
import {OrderByScore} from "../OrderScore/OrderByScore";
import ApiOrdDb from "../FilteredByDbOrApi/ApiOrDb.jsx"
import "./NavBar.css"


export default function NavBar() {

    return (
        <div className="nav__bar">
                <img 
                    src="https://th.bing.com/th/id/R.01c058845cf508a27fa30c15db746f35?rik=KkfVCypQPQsj6A&riu=http%3a%2f%2ffs5.directupload.net%2fimages%2f161218%2fwv5c67ra.png&ehk=azowtn1e%2biXboLPeu4vsNa2Jj7geuZPePBFEBK9dA%2f4%3d&risl=&pid=ImgRaw&r=0" 
                    alt="" 
                    width="90"
                    height="80"
                    />
            
                <SearchBar />
            
            <div className="buttonsOrders">
                </div>
                <h2>Find your favorite dish ❕ ➛ </h2>
                <div className="ORDER">
                    <OrderAlphabeticFunction />
                </div>
                <div className="Score">
                    <OrderByScore />
                </div>
                <div className="ApiOdb">
                    <ApiOrdDb />
                </div>
                <div className="FilteredByDiets">
                    <FilteredByDiets />
                </div>
                <div>
            </div>

        </div>
    )
}