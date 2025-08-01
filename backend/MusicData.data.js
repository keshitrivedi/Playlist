let Playlist = [
    {
        id: 1,
        title: "Eleven Weeks",
        artist: "Vansire",
        audio: "../ElevenWeeks_audio.mp3",
        thumbnail: "../vansire_albumcover.jpeg",
    },
    {
        id: 2,
        title: "Overthinker",
        artist: "Willis",
        audio: "../Overthinker_audio.mp3",
        thumbnail: "../Overthinker_albumcover.png",
    },
    {
        id: 3,
        title: "Lost",
        artist: "Autumn's Gray Solace",
        audio: "../Lost_audio.mp3",
        thumbnail: "../Lost_albumcover.png",
    },
    {
        id: 4,
        title: "Upward",
        artist: "Ohio",
        audio: "../Upward_audio.mp3",
        thumbnail: "../Upward_albumcover.png",
    },
    {
        id: 5,
        title: "Tujhi Mein",
        artist: "Saahel",
        audio: "../TujhiMein_audio.mp3",
        thumbnail: "../TujhiMein_albumcover.png",
    },
    {
        id: 6,
        title: "OK...Since We're Being Honest",
        artist: "daudi matsiko",
        audio: "../Honest_audio.mp3",
        thumbnail: "../Honest_albumcover.png",
    },
    {
        id: 7,
        title: "Reflections Nos. 3 & 4",
        artist: "Vansire",
        audio: "../Reflections_audio.mp3",
        thumbnail: "../AngelYouth_albumcover.jpg",
    },
    {
        id: 8,
        title: "Synth Man",
        artist: "Vansire",
        audio: "../SynthMan_audio.mp3",
        thumbnail: "../AngelYouth_albumcover.jpg",
    },
    {
        id: 9,
        title: "From the Subway Train",
        artist: "Vansire",
        audio: "../SubwayTrain_audio.mp3",
        thumbnail: "../AngelYouth_albumcover.jpg",
    },
]

Playlist.forEach((song, index) => {
    song.duration = toString(song.audio.duration)
})

export {Playlist}