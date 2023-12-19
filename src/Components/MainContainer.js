import { FaUsers } from "react-icons/fa";
import "../styles/MainContainer.css";
import { AudioList } from "./AudioList";
import { HeaderSong } from "./HeaderSong";
import { HeaderBar } from "./HeaderBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { get, ref, onValue  } from "firebase/database";
import { database } from "../firebase-config";

function MainContainer() {
  
  // const auth = getAuth()
  // const user = auth.currentUser;
  // const uid = user.uid;
  // console.log(uid);
  // const userRef = ref(database, 'UserInformation/' + uid);
  //   onValue(userRef, (snapshot)=>{
  //     snapshot.forEach(childSnapshot =>{
  //       let data = childSnapshot.val();
  //       console.log(data);
  //     })
  //   })

  const BGColor = "linear-gradient(#012437,#052a3d)";

  return (
    <div className="mainContainer">
      <HeaderBar style={BGColor} />
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
