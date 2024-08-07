import { useLocation } from "react-router-dom";
import Header from "../header";

function MovieDetails(){
    const location = useLocation();
    const renderStars = (rating) => {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★';
        }
        return stars;
    }
    return(
        <div>
            <Header/>
            <div style={{ width:"20%", margin:"auto", textAlign:"center"}}>
                <h4>{location.state.data.id}</h4>
                <img style={{height:"300px"}} src={location.state.data.Poster}/>
                <h2>{location.state.data.Title}</h2>
                <p>Release Year:{location.state.data.Year}</p>
                <p>Type:{location.state.data.Type}</p>
                <p>Rating: {renderStars(location.state.data.rating)}</p>

            </div>

        </div>
    )
}

export default MovieDetails;