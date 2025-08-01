import { useRef, useEffect } from "react"

function Card (MusicData) {
    const audioRef = useRef(null);
    const { isPlaying, onPlay, onPause } = MusicData;

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play()
            } else {
                audioRef.current.pause()
            }
        }
    }, [isPlaying])

    const togglePlayPause = () => {
        if (isPlaying) {
            onPause()
        } else {
            onPlay()
        }
    }

    return (
        <>
            <audio ref={audioRef}>
                <source src={MusicData.audio} type="audio/mpeg" />
                Moosic
            </audio>

            <div id='musicCard' className={`flex flex-row justify-between p-3 ${isPlaying ? 'bg-zinc-800' : 'bg-zinc-900'} m-2 text-white rounded-lg`} onClick={togglePlayPause}>
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