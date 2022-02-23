import logo from './assets/logo.png'
import { BrowserRouter as Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="website_logo" height="90%" id="navbar-complogo"/>
            <Link to="\home">
                Home
            </Link>
            <Link to="\portfolio">
                My Portfolio
            </Link>
            <Link to="\learn">
                Learn Here
            </Link>
        </div>
    );
}

export default NavBar;