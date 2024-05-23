import './login.css';
import logo from '../../assets/main-logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();
    const checkLogin=()=>{
        console.log('login');
        navigate('dashboard');
    }
    return(
        <div className="login-container">
            <div className="main-box primary-color">
                <div className="logo-box secondary-color">
                    <img src={logo} className='detailing-logo' alt='logo'/>
                </div>
                <div className='login-dets'>
                    <h1 className='main-font title'>MURMUR..</h1>  
                    <div className='login-heading main-font'>Welcome</div>
                    <label className='label main-font'>User Name</label>
                    <input type='text' id='userName' name='userName' className='input'/>
                    <label className='label main-font'>Password</label>
                    <input type='password' id='password' name='password' className='input'/>
                    <div className='button-div secondary-color main-font' onClick={checkLogin}>Login</div>
                </div>
            </div>
        </div>
    )
};


export default Login;