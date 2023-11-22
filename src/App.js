import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { Register } from './Components/Register';
import { RightMenu } from "./Components/RightMenu";
function Navigation() {
  return (
    <div>
    <ul>
      <li><Link to="">Home</Link></li>
      <li><a href="/Bay">Bay</a></li>
    </ul>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Check the current route and update state accordingly
    setShowText(window.location.pathname === '/');
  }, []);

  return (
    <div className="App">
      {showText && <Navigation />}

      <div className="background"></div>

      <Routes>
        <Route path="" element={
          <>
            <Register/>
          </>
        } />
        <Route path="/Bay" element={
          <>
            <LeftMenu />
            <MainContainer />
            <RightMenu />
            
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
