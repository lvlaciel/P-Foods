import React from "react";
import { useDispatch } from "react-redux";
import { OrderAlphabetic } from "../../actions";
import "./OrderAlphabetic.css"


export function OrderAlphabeticFunction(){
    const dispatch =  useDispatch();

    function onHandleChange(e){
      dispatch(OrderAlphabetic(e.target.value))
    };
  return (
    <div className="orderASC">
      <select className="Select" onChange = {onHandleChange} >
        <option value="all">🍴Alphabetic </option>
        <option value="asc"> A-Z </option>
        <option value="desc"> Z-A </option>
      </select>
    </div>
  );
};

