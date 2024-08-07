import React from "react";
import Header from "../header";
import { useLocation } from "react-router-dom";


function SingleCard(){
    const location = useLocation();
    const selectedData = location?.state?.selectedData || "Default value or fallback";
    console.log("selectedData",location);

    return(
        <div>
            <Header/>

            <div className="imageContainer">
            {/* <img className="movie-image" src={avatar}/>
            <h4>{title}</h4>
            <p>{year}</p>
            <p>{type}</p>
            <p>{rating}</p> */}
        </div>

        </div>
    )
}

export default SingleCard;