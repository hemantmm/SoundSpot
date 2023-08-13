import React from "react"; 
import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useLocalStorage } from "usehooks-ts";
import { MetaHeader } from "~~/components/MetaHeader";
import { ContractUI } from "~~/components/scaffold-eth";
import { ContractName } from "~~/utils/scaffold-eth/contract";
import { getContractNames } from "~~/utils/scaffold-eth/contractNames";


const songs = [
  { title: 'Song 1', URL: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3' },
  { title: 'Song 2', URL: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3' },
  { title: 'Song 3', URL: '/songs/song3.mp3' },
];


const Debug: NextPage = () => {  

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const currentSong = songs[currentSongIndex];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };



  const [uploadedSongs, setUploadedSongs] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {
    const storedSongs = JSON.parse(window.localStorage.getItem('uploadedSongs'));
    if (storedSongs) {
      setUploadedSongs(storedSongs);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('uploadedSongs', JSON.stringify(uploadedSongs));
  }, [uploadedSongs]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const objectURL = URL.createObjectURL(file);

    const fileName = file.name;

    setUploadedSongs((prevSongs) => [...prevSongs, { url: objectURL, name: fileName }]);
  };

  const toggleSong = (song) => {
    if (currentlyPlaying && currentlyPlaying.src === song.url) {
      currentlyPlaying.pause();
      setCurrentlyPlaying(null);
    } else {
      if (currentlyPlaying) {
        currentlyPlaying.pause();
      }

      const audio = new Audio(song.url);
      audio.play();
      setCurrentlyPlaying(audio);
    }
  };


  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">

    <audio src={currentSong.URL} autoPlay={isPlaying} onEnded={playNextSong} />
      <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
        {songs.map((repeatIndex) => (
          <div key={repeatIndex} className="w-1/4 p-4 bg-blue-300 rounded-lg shadow-md m-4">
            <audio src={currentSong.URL} autoPlay={isPlaying} onEnded={playNextSong} />
            <h2 className="block text-center text-gray-800 font-semibold">{repeatIndex.title}</h2>
            <div className="flex">
              <button onClick={playPreviousSong} className="block mx-auto mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                back &nbsp;
              </button>
              <button onClick={togglePlay} className="block mx-auto mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                {isPlaying ? 'pause' : 'play'}
              </button>
              <button onClick={playNextSong} className="block mx-auto mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                &nbsp;forward
              </button>
            </div>
          </div>
        ))}
      </div>


<input type="file" accept="audio/*" onChange={handleFileUpload} />

<div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
        {uploadedSongs.map((song, index) => (
          <div
            key={index}
            className="w-1/5 p-6 bg-blue-300 rounded-lg shadow-md m-4"
          >
            <span className="block text-center text-gray-800 font-semibold">
              {song.name}
            </span>
            <br />
            <button
              className="block mx-auto mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => toggleSong(song)}
            >
              {currentlyPlaying && currentlyPlaying.src === song.url
                ? 'Pause'
                : 'Play'}
            </button>
          </div>
        ))}
      </div>

      </div>
    </>
  );
};


export default Debug;

