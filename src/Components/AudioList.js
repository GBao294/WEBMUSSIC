import React, { useEffect, useState,  useContext } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import "../styles/LeftMenu.css";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";
import { MusicContext } from './MusicContext';

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);
  const [auto, setAuto] = useState(false);

  useEffect(() => 
  {
    const allSongs = document.querySelectorAll(".songs");
    
    function changeActive() 
    {
      allSongs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allSongs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changeFavourite = (id) => 
  {
    Songs.forEach((song) => 
    {
      if (song.id === id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...songs]);
  };

  const { setMainSong } = useContext(MusicContext);

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>10 songs</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
            >
              <div className="count">
                <p>{`#${index + 1}`}</p>
              </div>

              <div className="song">
                <div 
                className="imgBox"
                onClick={() => setMainSong(song?.song, song?.imgSrc, song?.songName, song?.artist)}
                >
                  <img src={song?.imgSrc} alt="" />
                </div>

                <div className="section">
                  <p 
                  className="songName"
                  onClick={() => setMainSong(song?.song, song?.imgSrc, song?.songName, song?.artist)}
                  >
                    {song?.songName}{" "}
                    <span className="songSpan">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      {song?.view}
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      {song?.duration}
                    </p>

                    <div
                      className="favourite"
                      onClick={() => changeFavourite(song?.id)}
                    >
                      {song?.favourite ? (<i><FaHeart /></i>) : (<i><FaRegHeart /></i>)}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export  {AudioList} ;