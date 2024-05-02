import './login.css';
import logo from '../assets/main-logo.svg';

const Login = () =>{
    return(
        <div className="login-container">
            <h1 className='login-heading'>LOGIN</h1>
            <div className="main-box primary-color">
                <div className="logo-box secondary-color">
                    <h5 className='brannd-name'>MURMUR..</h5>  
                    <img src={logo} width={200} className='logo-main'/>
                </div>
            </div>
        </div>
    )
};


export default Login;