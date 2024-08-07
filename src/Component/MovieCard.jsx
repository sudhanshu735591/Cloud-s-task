import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header";
import "./MovieCard.css"

function MovieCard(props){
    const {avatar, title, year, type, rating, selectedData} = props;

    return(
        <div>
            <div className="imageContainer">
                <img className="movie-image" src={avatar}/>
                <h4 className="movie-name">{title}</h4>
                <p className="movie-year">{year}</p>
                <p className="movie-type">{type}</p>
                <p className="movie-rating">{rating}</p>
            </div>

        </div>
    )
}

export default MovieCard;