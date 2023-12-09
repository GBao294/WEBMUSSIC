import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";
import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { MusicProvider } from "./MusicContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderSong } from "./HeaderSong";
import { HeaderBar } from "./HeaderBar";
import {Songs} from "./Songs"

function MainContainer() {
  // useEffect(() => {
  //   const allLi = document.querySelector(".menuList").querySelectorAll("li");

  //   function changePopularActive() {
  //     allLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  // }, []);
  const BGColor = "linear-gradient(#012437,#052a3d)";

  return (
    <div className="mainContainer">
      <HeaderBar style={BGColor} />
      <HeaderSong />
      <AudioList Songs={Songs} />
    </div>
  );
}

export { MainContainer };
