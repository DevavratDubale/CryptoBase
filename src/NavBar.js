import logo from './assets/CryptoBase.png'
import dp from './assets/DisplayPicture.png'
import { Link } from "react-router-dom";

const NavBar = () => {
    var name = "JOHN DOE";
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="website_logo"  id="navbar-complogo"/>
            </div>
            <div className="navbar-links">
                <Link to="/">
                    <p>HOME</p>
                </Link>
                <Link to="/exchange">
                    <p>EXCHANGE</p>
                </Link>
                <Link to="/portfolio">
                    <p>PORTFOLIO</p>
                </Link>
                <Link to="/learn">
                    <p>LEARN</p>
                </Link>
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