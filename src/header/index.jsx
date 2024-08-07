import { useNavigate } from "react-router-dom";
import "./index.css"

function Header(){

    const navigate = useNavigate();

    function login(){
        navigate("/")
    }

    function home(){
        const loginstatus = localStorage.getItem("loginStatus");
       if(loginstatus=="true"){
        navigate("/homepage");
       }
       else{
        alert("Please login !!")
       }
    }
    return(
        <div className="header">
            <div className="childBox">
                <h1 className="headerText">Movie Library</h1>
                <p onClick={home} className="text">Home</p>
                <p onClick={login} className="text">Login</p>
            </div>

            <div className="border"></div>
        </div>
    )
}

export default Header;