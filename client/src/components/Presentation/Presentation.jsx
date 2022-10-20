import React from "react";
import "./Presentation.css"
import { Link } from "react-router-dom";

export default function Presentation() {
    return (
        <div className="homeShow">
            <img
                src="https://i.pinimg.com/originals/73/06/98/73069800f2fcf23cd8037e477f7ab361.png"
                alt=""
                width="100"
                height="90"
            />
            <h2>All recipes for free, create your own ❕... </h2>
            <h2>  ➛
            </h2>
            <div >
                <Link to="/myRecipe">
                    <button className="createBtn">
                        <span class="btnAdd">Create you recipe </span>
                    </button>
                </Link>
            </div>
            <img
                src="https://i.pinimg.com/originals/73/06/98/73069800f2fcf23cd8037e477f7ab361.png"
                alt=""
                width="100"
                height="90"
            />

        </div>

    )
}