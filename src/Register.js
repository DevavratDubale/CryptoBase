import sideimage from './assets/SidebarImage.png'
import { Link } from "react-router-dom";
import './App.css';

const Register = () => {
    return (
        <div className='body'>
            <div className='leftbar'>
            <div className="image">
                    <img src={sideimage} alt=""/>
                </div>

            </div>
            <div className='middlebar'>
                <h1>Create an Account</h1>
                <form className='loginform'>  
                <div className="feildzero">
                    <label className='fullnamelabel' for="Fullname">Full Name </label>  
                    <input type="text" className="Fullname" name="Fullname"/> 
                </div>
                <div className="fieldone">
                    <label className='emaillabel' for="Email Address">Email Address </label>  
                    <input type="email" className="email" name="Email"/> 
                </div>
                <div className="fieldtwo">
                    <label className='passwordlabel' for="Password">Password </label> 
                    <input type="text" className="Password" name="Password"/> 
                </div>
                </form>  
                <div className="submits">
                    <div className='logins'><Link to="/login"><button className="login"> Login</button></Link></div>
                    <div className='registers'><button className="register">Register</button></div>
                </div>
            </div>
        </div>
    );
}

export default Register;