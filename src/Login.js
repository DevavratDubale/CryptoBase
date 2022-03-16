import sideimage from './assets/SidebarImage.png'
import G from './assets/G.png'
import './App.css';

const Login = () => {
    return (
        <div className='body'>
            <div className='leftbar'>
            <div className="image">
                    <img src={sideimage} alt=""/>
                </div>

            </div>
            <div className='middlebar'>
                <h1>Welcome User</h1>
                <div className='logintext'>
                    Welcome to CryptoBase. 
                </div>
                <div className='logintext'>
                    Please login with your personal account
                </div>
                <div className="buttonlogin">
                    <button className="signinbutton">
                        <img className="G-image" src={G} /> 
                        <p>Sign in with Google</p>               
                    </button>
                </div>
                <div class="loginsec4-card">
                    <div className="loginline"></div>
                        <div class="loginsec4-container"> 
                            <p>OR</p> 
                        </div>
                   <div className="loginline"></div>
                </div>
                <form className='loginform'>  
                    <label className='emaillabel' for="Email Address">Email Address </label> <br/>  
                    <input type="email" className="email" name="Email"/> <br/>  
                    <label className='passwordlabel' for="Password">Password </label>  <br/>
                    <input type="text" className="Password" name="Password"/> <br/>  
                </form>  
            </div>
        </div>
    );
}

export default Login;