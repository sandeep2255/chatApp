import './login.css';
import logo from '../assets/main-logo.svg';
import chat from '../assets/chat.png';

const Login = () =>{
    const checkLogin=()=>{
        console.log('login');
    }
    return(
        <div className="login-container">
            <h1 className='login-heading main-font'>LOGIN</h1>
            <div className="main-box primary-color">
                <div className="logo-box secondary-color">
                    <h5 className='brannd-name main-font'>MURMUR..</h5>  
                    <img src={chat} width={290}/>
                    <img src={logo} width={200} className='logo-main'/>
                </div>
                <div className='login-dets'>
                    <label className='label main-font'>User Name</label>
                    <input type='text' id='userName' name='userName' placeholder='user name' className='input'/>
                    <label className='label main-font'>Password</label>
                    <input type='password' id='password' name='password' placeholder='password' className='input'/>
                    <div className='button-div secondary-color main-font' onClick={checkLogin()}>Login</div>
                </div>
            </div>
        </div>
    )
};


export default Login;