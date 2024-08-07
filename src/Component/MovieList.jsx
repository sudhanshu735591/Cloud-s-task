import { useEffect, useState } from "react";
import Header from "../header";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

function MovieList(){
    const [data, setData] = useState();
    const [duplicateData, setDuplicateData] = useState();
    const [value, setValue] = useState();
    const [selectedData, setSelectedData] = useState();
    const [array, setArray] = useState([]);
    const navigate = useNavigate();
    const fetchApiData = async()=>{
        let myData = await fetch("http://localhost:3000/movies");
        let response = await myData?.json();
        setData(response);
        setDuplicateData(response);
    }

    useEffect(()=>{
        fetchApiData();
    },[]);


    function handleAscending(){
        const ascendingData =[...data]?.sort((a,b)=>a.Year-b.Year)
        setData(ascendingData);
    }

    function handleDescending(){
        const descending = [...data]?.sort((a, b) => b.Year - a.Year);
        setData(descending);
    }

    function handleCheckBox (e){
        setData(duplicateData);
        setValue(e.target.value);
        const value = e.target.value;
        if (e.target.checked) {
            setArray(prev => [...prev, value]);
        } if(!e.target.checked) {
            setArray(prev => prev.filter(item => item !== value));
        }
    }

    useEffect(()=>{
        const filteredMovies = array.length===0?duplicateData:
        data?.filter(movie => array.includes(movie.rating.toString()));
        setData(filteredMovies);
    },[array])

    function handleSingleData(val) {
        setSelectedData(val);
        navigate(`/moviedetails/${val?.id}`, { state: { data: val } });
    }
    return(
        <div>
            <Header/>
            <div className="moviesContainer">
                <SideBar handleCheckBox={handleCheckBox} handleDescending={handleDescending} handleAscending={handleAscending}/>
                <div className="cardBox">
                    <div className="cardChildBox">
                    {data?.map((val) => {
                            return (
                                <div
                                    key={val.id}
                                    onClick={() => handleSingleData(val)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <MovieCard
                                        selectedData={selectedData}
                                        avatar={val?.Poster}
                                        title={val?.Title}
                                        year={val?.Year}
                                        type={val?.Type}
                                        rating={val?.rating}
                                    />
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}
export default MovieList;