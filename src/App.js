
import './App.css';
import Loginform from './components/Login';
import Registerform from './components/RegisterForm';
import Index from './components/Index';
import Details from './components/Details'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loginform/>} />
          <Route path="/login" element={<Loginform/>}/>
          <Route path="/register" element={<Registerform/>}/>
          <Route path="/home" element={<Index/>}/>

          <Route path="/detail" element={<Details/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
