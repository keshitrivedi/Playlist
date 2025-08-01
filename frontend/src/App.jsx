import { useEffect, useState } from 'react'
import { Card } from './components/Card.jsx'
import axios from "axios"
// import './App.css'

// let MusicData = {
//   title: "Eleven Weeks",
//   artist: "Vansire",
//   audio: "../ElevenWeeks_audio.mp3",
//   thumbnail: "../vansire_albumcover.jpeg",
//   duration: "3:05",
// }

// import { Playlist } from '../../backend/MusicData.data.js'

function App() {
  const [Playlist, setPlaylist] = useState([])
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  useEffect (() => {
    axios.get('/api/musicData')
    .then((response) => {
      setPlaylist(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const handlePlay = (songID) => {
    setCurrentlyPlaying(songID)
  }

  const handlePause = () => {
    setCurrentlyPlaying(null)
  }
  

  return (
    <>
      {/* <Card {...MusicData} />
      <Card {...MusicData} />
      <Card {...MusicData} /> */}

      {
        Playlist.map((song, index) => (
          <Card key={song.id} {...song} 
          isPlaying={currentlyPlaying === song.id}
            onPlay={() => handlePlay(song.id)}
            onPause={handlePause}
          />
        ))
      }
    </>
  )
}

export default App
