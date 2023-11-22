import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import GroupLogo from '../img/logo.png';
import "../styles/LeftMenu.css";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
        <img src={GroupLogo} alt="BigCo Inc. logo" style={{ width: '40px', height: '40px' }} />


          <h2>NerdyGroove</h2>
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />

      <MenuPlayList />

      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export { LeftMenu };
