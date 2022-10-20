import React from "react";
import { Link } from "react-router-dom";
import "../Landing/LandingPage.css"

export default function LandingPage() {
    return (
        <div className="Landing">
            <div className="soyHenry">
                <img
                    src="https://assets.soyhenry.com/logoOG.png"
                    alt=""
                    width="80"
                    height="60"
                />
            </div>
            <div className="Welcome">
                <img
                    src="https://thecookbook.pk/wp-content/uploads/2021/12/The-Cook-Book-logo-1.png"
                    alt=""
                    width="330"
                    height="150"
                />
            </div>
            <div className="slogan">
                <h2> Welcome </h2>
                <h2> Don't know what to cook today? </h2>
                <h2>🢛 Recipes here 🢛</h2>
            </div>
            <div className="cocinero">
                <Link to={'/home'}>
                    <img
                        src="https://moradadelchef.com/wp-content/uploads/2019/07/MC_ICON_CHEF_ROJO.png"
                        alt=""
                        width="100"
                        height="90"
                    />
                </Link>
            </div>

        </div>
    );
};
                   
                
                
            



            
            
            


