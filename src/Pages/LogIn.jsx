import { useState } from "react";
import Header from "../header";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";

function LogIn(){
    const navigate = useNavigate();
    localStorage.setItem("loginStatus", false);
    const [loginStatus, setLLoginStatus] = useState(false);
    const [data, setData] = useState({
        email:"",
        password:""
    })
        function onChange(e){
        const {name, value} = e.target;
        setData({...data, [name]:value});
    }
    const checkData = async ()=>{
        const fetchData = await fetch("https://reqres.in/api/users?page=1");
        const response = await fetchData?.json();
        const checkCredential = response?.data?.some((val)=>val.email===data.email);
        if(checkCredential){
            localStorage.setItem("loginStatus", true);

            navigate("/homepage");
        }
        else{
            alert("Email id does not exist")
            localStorage.setItem("loginStatus", false);

        }
    }

    return(
        <div className="loginBox">
            <Header/>
            <div className="child">
                <div style={{display:"flex", gap:"10px", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                    <h1>Log In</h1>
                    <input onChange={onChange} className="inuutBox" type="email" name="email" placeholder="Email" />
                    <input onChange={onChange} className="inuutBox" type="password" name="password" placeholder="Password" />
                    <button className="loginbutton" onClick={checkData}>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn;