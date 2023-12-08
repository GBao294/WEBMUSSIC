import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";
import { MusicProvider } from "./MusicContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderSong } from "./HeaderSong";
import { HeaderBar } from "./HeaderBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Favourite} from "./Favourite";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">
      <HeaderBar />
      <HeaderSong />
      <div className="menuList">
        <ul>
          <li>
            <Link to="/Bay">Popular</Link>
          </li>
          <li>
            <Link to="/Favourite">Favourite</Link>
          </li>
        </ul>

        <p>
          <i><FaUsers /></i>
          12.3M <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
}

export { MainContainer };
