import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import ChatDashboard from './components/Home/chatDashboard';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<ChatDashboard/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
