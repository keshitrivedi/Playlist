import { useState } from 'react'
import { Card } from './components/Card.jsx'
// import './App.css'

// let MusicData = {
//   title: "Eleven Weeks",
//   artist: "Vansire",
//   audio: "../ElevenWeeks_audio.mp3",
//   thumbnail: "../vansire_albumcover.jpeg",
//   duration: "3:05",
// }

import { Playlist } from '../../backend/MusicData.data.js'

function App() {

  return (
    <>
      {/* <Card {...MusicData} />
      <Card {...MusicData} />
      <Card {...MusicData} /> */}

      {
        Playlist.map((song, index) => (
          <Card key={song.id} {...song} />
        ))
      }
    </>
  )
}

export default App
