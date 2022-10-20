import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { theFilterByDiet, getDiet} from "../../actions";
import "./FilterDiets.css"

export function FilteredByDiets () {
    let key = 100
    const dispatch = useDispatch();
    const tipeDiet = useSelector(state => state.typeOfDiet)
    const onFilterChange = (e) => {
        e.preventDefault();
        dispatch(theFilterByDiet(e.target.value));
        dispatch(getDiet(e.target.value));
    };
    useEffect(()=>{
        dispatch(getDiet())
    },[dispatch]);
    
    return (
        <div className="OrderDiets">
            <select className="types" onChange={e => onFilterChange(e)}>
            {tipeDiet?.map(el=><option value={el} key={key++}>🍴Diet {el}</option>)}
                {/* <option value="all">All Diets</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto vegetarian">Lacto Vegetarian</option>
                <option value="ovo vegetarian">Ovo Vegetarian</option>
                <option value="lacto ovo">Lacto Ovo</option>
                <option value="vegan">Vegan</option>
                <option value="pescatarian">Pescetarian</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="fodmap friendly">Low Fodmap</option>
                <option value="whole 30">Whole 30</option>
                <option value="dairy free">Dairy Free</option>
                <option value="lacto ovo vegetarian">Lacto Ovo egetarian</option> */}
            </select>
        </div>
    )
};

