import { useNavigate } from "react-router-dom";
import "./index.css";

function Card(props){
    const {avatar, title, year, type, rating, selectedData} = props;

    

    const navigate = useNavigate();

    function handleImageClick(){
        navigate("/singleCard", { state: { selectedData } });
    }
    return(
        <div className="imageContainer">
            <img className="movie-image" src={avatar} onClick={handleImageClick}/>
            <h4>{title}</h4>
            <p>{year}</p>
            <p>{type}</p>
            <p>{rating}</p>
        </div>
    )
}

export default Card;