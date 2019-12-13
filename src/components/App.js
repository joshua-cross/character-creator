import React from 'react';
// import logo from './logo.svg';
import './styles/main.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header/header';
import Register from './register/register';
import ErrorHolder from './errors/errorHolder';

const homePage = () => {
  return(
    <div>
      <Header />
      <ErrorHolder />
    </div>
  )
}

const register = () => {
  return(
    <div>
      <Header />
      <ErrorHolder />
      <Register />
    </div>
  )
}

const login = () => {
  return(
    <div>
      <Header />
      <ErrorHolder />
    </div>
  )
}

const about = () => {
  return(
    <div>
      <Header />
      <ErrorHolder />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path = "/" exact component = {homePage} />
        <Route path = "/login" component = {login} />
        <Route path = "/register" component = {register} />
        <Route path = "/about" component = {about} />
      </BrowserRouter>
    </div>
  );
}

export default App;
