import NavBar from "../styles/NavBar";
import {Link} from "react-router-dom";
import {useState} from "react";

const Nav = () => {

    const [loggedInUser, setLoggedInUser] = useState({
        username: '',
        email: '',
        roles: [''],
        logged: false
    });

    return(
        <NavBar>
            <h1>CleanIT</h1>
            <div>
                <Link to="/home">Home</Link>
                {loggedInUser.roles.includes("") ? <></> : <></>}
            </div>
            <div>
                {loggedInUser.logged ? <></> : <Link to="/login">Login</Link>}
            </div>
        </NavBar>
    );
}

export default Nav;
