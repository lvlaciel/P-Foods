import React, { Component } from "react";
import { getRecipeById, clearDetails, deleteRecipe } from "../../actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import  Loading  from "../Loading/Loading.jsx";
import Swal from "sweetalert2"
import "./RecipeDetails.css"

let key = 1
const theAlert = () => {
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue?',
        icon: 'error',
        html: '<a href="http://localhost:3000/home">To home?</a> ',
        confirmButtonAriaLabel: 'Thumbs up'
    })
}
const theAlert2 = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your recipe has been deleted.',
            'success',
          )
        }
      })
}
class RecipeDetails extends Component {


    componentDidMount() {

        const id = this.props.match.params.id;

        this.props.getRecipeById(id);

        if( id.toString().length !== 36 && id.toString().length !== 6 && id.toString().length !== 7) theAlert()

        
    };

    handleClick = () => {
        this.props.deleteRecipe(this.props.recipeDetails.id)
        theAlert2()
    }

    componentWillUnmount() {

        this.props.clearDetails()

    };
    
    render() {

        return (
            <div className="GeneralDiv">
                <div >
                    <Link to="/home">
                        <img className="backImg"
                            src="https://th.bing.com/th/id/R.de6a5e67889cb18f8de737772f84d494?rik=LV3mbFZOVDUhCw&pid=ImgRaw&r=0"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="Delete">
                {this.props.recipeDetails?.createdInDb? 
                <Link to="/home">
                <button onClick={() => this.handleClick()}>Delete recipe?</button> 
                 </Link>
                : null 
                }
                </div>
                {this.props.recipeDetails.name ?
                    <div className="RecipeDetails">

                        <h2>DETAILS: </h2>
                        <h3> {this.props.recipeDetails.name} </h3>
                        <h4>Health score: 💖 {this.props.recipeDetails.healthScore}</h4>
                        <img src={this.props.recipeDetails.image} alt="Error" />

                        <h4>Dish types 🍲:</h4>
                        {this.props.recipeDetails.dishType?.map(el => {
                            return (
                                <h5><li>{el}</li></h5>)
                        })}


                        <h4>Diet types 🥗:</h4>
                        {this.props.recipeDetails.dietTypes?.map(el => <h5 key={key++}><li >{el.name ? el.name : el}</li></h5>)}

                        <h4>Summary 👨‍🍳:</h4>
                        {<h5>{this.props.recipeDetails?.summary?.replace(/<[^>]*>/g, '')}</h5>}

                        <h4>Recipe steps 🥣:</h4>
                        {
                            typeof this.props.recipeDetails.steps !== "string" ?
                                this.props.recipeDetails.steps?.map(el => {
                                    return (
                                        <h5> {el.step} </h5>
                                    )
                                }) : <h5> {this.props.recipeDetails.steps} </h5>
                        }
                    </div>
                    : <Loading/>}
                    
            </div>
        )
    };

};

function mapStateToProps(state) {
    return {
        recipeDetails: state.recipeDetails
    };

}

function mapDispatchToProps(dispatch) {
    return {
        getRecipeById: id => dispatch(getRecipeById(id)),
        clearDetails: () => dispatch(clearDetails()),
        deleteRecipe: id => dispatch(deleteRecipe(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
