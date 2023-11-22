import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"))

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
            method: "POST",
            headers: {
                'jwt-token': user.token
              }
        })
        .then(r => r.json())
        .then(r => {
            setLoggedIn('success' === r.message)
            setEmail(user.email || "")
        })
  }, [])

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

  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} /> 
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/Bay" element={
          <>
            <LeftMenu />
            <MainContainer />
            <RightMenu />
            
          </>
        } />
        </Routes>
       
      </BrowserRouter>
      
      <div className="background"></div>
    </div>
  );
  
}

export default App;
