import { useEffect, useState } from "react";
import Card from "../Card";
import Header from "../header";
import "./index.css";

function MovieList(){
    const [data, setData] = useState();
    const [duplicateData, setDuplicateData] = useState();
    const [value, setValue] = useState();
    const [selectedData, setSelectedData] = useState();

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
        setValue(e.target.value)
    }

    useEffect(()=>{
        const filterData = data?.filter(val=>val.rating==value);
        setData(filterData)
    },[value])

    function handleSingleData(val){
        setSelectedData(val);        
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
                        {
                            data?.map((val)=>{
                               return(
                                <div onClick={()=>handleSingleData(val)}>
                                    <Card selectedData ={selectedData} avatar={val?.Poster} title={val?.Title} year ={val?.Year} type={val?.Type} rating = {val?.rating}/>
                                </div>
                               )
                            })
                        }

                    </div>
                </div>

            </div>


        </div>
    )
}

export default MovieList;