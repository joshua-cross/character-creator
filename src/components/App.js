import React from 'react';
// import logo from './logo.svg';
import './styles/main.css';
import {BrowserRouter, Route} from 'react-router-dom';

const homePage = () => {
  return(
    <p>Hello World</p>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path = "/" exact component = {homePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
