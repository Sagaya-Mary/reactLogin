import React from "react"
import LoginForm from './LoginForm';
import RegisterForm from './Register';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default class RoutersPath extends React.Component {
  render() {
    return (
      <div>
        <Router>

          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />



          </Routes>

        </Router>
      </div>
    )
  }
}



