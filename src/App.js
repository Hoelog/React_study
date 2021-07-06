import './App.css';
import Home from './component/Home';
import About from './component/About';
import { Route, Link, useLocation } from "react-router-dom";
import React from 'react';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to="/">홈!</Link>
          </li>
          <li>
            <Link to="/About">어바웃!</Link>
          </li>
        </ul>
        <Route path="/" exact={true} component={Home} />
        <Route path="/About" component={About} />
      </div>
      <p>현재 location : {location.pathname}</p>
    </div>
  );
}

export default App;
