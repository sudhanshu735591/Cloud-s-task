import { useNavigate } from "react-router-dom";
import "./index.css"

function Header(){

    const navigate = useNavigate();

    function login(){
        navigate("/")
    }

    function home(){
        // navigate("/movielist");
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