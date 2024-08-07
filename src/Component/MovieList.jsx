import { useEffect, useState } from "react";
import Header from "../header";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import { Link, useNavigate } from "react-router-dom";

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
                <div className="filterBox">
                    <h4>Filter by Rating</h4>

                    <div className="checkbox">
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" id="1" value={1} onChange={handleCheckBox}/>
                            <p className="star">
                            ★☆☆☆☆
                            </p>
                        </div>


                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" value={2} id="2" onChange={handleCheckBox}/>
                            <p className="star">
                            ★★☆☆☆
                            </p>
                        </div>

                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" id="3" value={3} onChange={handleCheckBox}/>
                            <p className="star">
                            ★★★☆☆
                            </p>
                        </div>

                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" id="4" value={4} onChange={handleCheckBox}/>
                            <p className="star">
                            ★★★★☆
                            </p>
                        </div>

                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <input type="checkbox" id="5" value={5} onChange={handleCheckBox}/>
                            <p className="star">
                            ★★★★★
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4>Sort By Year</h4>
                        <div>
                            <div className="radioBox" onChange={handleAscending}>
                                <input type="radio" name="sortOrder" id="ascending" />
                                <label htmlFor="ascending">Ascending</label>
                            </div>

                            <div className="radioBox" onChange={handleDescending}>
                                <input type="radio" name="sortOrder" id="descending" />
                                <label htmlFor="descending">Descending</label>
                            </div>
                        </div>
                    </div>
                </div>

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