import logo from './assets/CryptoBase.png'
import dp from './assets/DisplayPicture.png'
import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
    var name = "JOHN CENA";
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="website_logo"  id="navbar-complogo"/>
            </div>
            <div className="navbar-links">
                <NavLink exact activeStyle={{color: "#7716A5"}} to="/" >
                    <p>HOME</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/exchange" >
                    <p>EXCHANGE</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/portfolio" >
                    <p>PORTFOLIO</p>
                </NavLink>
                <NavLink activeStyle={{color: "#7716A5"}} to="/learn" >
                    <p>LEARN</p>
                </NavLink>
            </div>
            <div className="navbar-profileinfo">
                <p>{ name }</p>
                <div id="navbar-dp">
                    <img src={dp} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;