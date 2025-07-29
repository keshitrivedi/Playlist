import { useRef, useState } from "react"

function Card (MusicData) {
    const audioRef = useRef(null);
    const musicCard = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
        }
        setIsPlaying(!isPlaying)
    }
    return (
        <>
            <audio ref={audioRef}>
                <source src={MusicData.audio} type="audio/mpeg" />
                Moosic
            </audio>

            <div ref={musicCard} id='musicCard' className="flex flex-row justify-between p-3 bg-zinc-900 m-2 text-white rounded-lg" onClick={playAudio}>
                <div id="mainContent" className="flex flex-row">
                    <div id='albumCover'>
                        <img src={MusicData.thumbnail} alt="album cover" className="max-w-30" />
                    </div>
                    <div id='description' className="flex flex-col justify-between pl-5">
                        <div id='titleArtist'>
                            <div id="title" className="text-xl font-semibold">{MusicData.title}</div>
                            <div id="Artist">{MusicData.artist}</div>
                        </div>
                        <div id='duration' className="font-thin">{MusicData.duration}</div>
                    </div>
                </div>
                <div id="move" className="flex w-10 bg-zinc-800 rounded-sm"></div>
            </div>
        </>
    )
}

export {Card}