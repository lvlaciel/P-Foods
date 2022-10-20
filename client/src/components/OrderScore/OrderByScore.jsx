import React from "react";
import {OrderHealthScore} from "../../actions";
import { useDispatch } from "react-redux";
import "./OrderScore.css"

export function OrderByScore() {

    const dispatch = useDispatch();

    function handleOrderScore(e) {
        e.preventDefault();
        dispatch(OrderHealthScore(e.target.value));
    };

    return (
        <div className="HealthScore">
            <select className="ORDER_H_SCORE" onChange={handleOrderScore}>
                <option value="null">🍴Order by Score </option>
                <option value="desc"> BEST SCORES </option>
                <option value="asc"> WORST SCORES </option>
            </select>
        </div>
    )
};


