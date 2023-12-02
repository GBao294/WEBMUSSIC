import React, { useState, createContext } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [songsearch, setSong] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [songName, setSongName] = useState(null);
  const [artist, setArtist] = useState(null);

  const setMainSong = (songSrc, imgSrc, songName, artist) => {
    setSong(songSrc);
    setImgSrc(imgSrc);
    setSongName(songName);
    setArtist(artist);
    setAutoplay(true);
  };

  return (
    <MusicContext.Provider value={{songName, artist, songsearch, imgSrc, autoplay, setMainSong }}>
      {children}
    </MusicContext.Provider>
  );
};