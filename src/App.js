import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from "./Components/AboutUs";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import SignIn from './Components/Login';
import { MainContainer } from "./Components/MainContainer";
import { MusicProvider } from './Components/MusicContext';
import MusicPlayer from './Components/MusicPlayer';
import { Register } from './Components/Register';
import { US_UK } from './PlayList/US-UK';
import { Vpop } from './PlayList/Vpop';
import { MyPlaylist } from './PlayList/MyPlaylist';
import { MyPlaylist2 } from './PlayList/MyPlaylist2';
import { Favourite } from './Components/Favourite';
import { HeaderBarAboutUs } from './Components/HeaderBarAboutUs';
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
  const BGColor = "linear-gradient(#012437,#052a3d)";

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
              <LeftMenu/>
              <MainContainer/>
              <MusicPlayer/>
            </MusicProvider>
          </div>
         
          </>
        } />
         <Route path="/AboutUs" element={
          <>
              <HeaderBarAboutUs style={BGColor} />
              <AboutUs />
          
          </>
        } />
        
        <Route path="/UsUkMusic" element={
          <>
          <div className="App">
          <MusicProvider>
            <LeftMenu />
            <US_UK />
            <MusicPlayer/>
          </MusicProvider>
          </div>
          </>
        } />
        
        <Route path="/Vpop" element={
          <>
          <div className="App">
          <MusicProvider>
            <LeftMenu />
            <Vpop/>
            <MusicPlayer/>
          </MusicProvider>
          </div>
          </>
        } />

        <Route path="/myPlaylist" element={
          <>
          <div className="App">
          <MusicProvider>
            <LeftMenu />
            <MyPlaylist />
            <MusicPlayer/>
          </MusicProvider>
          </div>
          </>
        } />

        <Route path="/Playlist2" element={
          <>
          <div className="App">
          <MusicProvider>
            <LeftMenu />
            <MyPlaylist2 />
            <MusicPlayer/>
          </MusicProvider>
          </div>
          </>
        } />
        <Route path="/Favourite" element={
          <>
          <div className="App">
            <MusicProvider>
              <LeftMenu />
              <Favourite />
              <MusicPlayer/>
            </MusicProvider>
            </div>
          </> 
        } />
      </Routes>
    </div>
  );
}

export default App;
