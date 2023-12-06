import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from "./AboutUs";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import SignIn from './Components/Login';
import { MainContainer } from "./Components/MainContainer";
import { MusicProvider } from './Components/MusicContext';
import MusicPlayer from './Components/MusicPlayer';
import { Register } from './Components/Register';
function Navigation() {
  return (
    <div>
    <ul>
     
      {/* <li><Link to="/">Home</Link></li>
      <li><a href="/Bay">Bay</a></li> */}
    </ul>
    </div>
  );
}

function App() {
  // const navigate = useNavigate();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Check the current route and update state accordingly
    setShowText(window.location.pathname === '/');
  }, []);

  return (
    <div className="">
      {showText && <Navigation />}

      <div className="background"></div>

      <Routes>
        <Route path="/" element={
          <>
            <SignIn />
          </>
        } />

        <Route path="/Register" element={
          <>
            <Register/>
          </>
        } />
        <Route path="/Bay" element={
          <>
          <div className="App">
          <MusicProvider>
            <LeftMenu />
            <MainContainer />
            <MusicPlayer/>
          </MusicProvider>
          </div>
         
          </>
        } />
         <Route path="/AboutUs" element={
          <>
            <AboutUs/>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
