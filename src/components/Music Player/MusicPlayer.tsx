import { Box, Stack } from "@mui/material"
import musicImg1 from '../../assets/Music/music1.png'
import musicImg2 from '../../assets/Music/music2.png'
import musicImg3 from '../../assets/Music/music3.png'
import musicImg4 from '../../assets/Music/music4.png'
import music1 from '../../assets/Music/music01.mp3'
import music2 from '../../assets/Music/music02.mp3'
import music3 from '../../assets/Music/music03.mp3'
import music4 from '../../assets/Music/music04.mp3'
import PlayerButtons from "./PlayerButtons"
import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
const styles = {
    root: {
        backgroundColor: "#373637",
        height: 220,
        width: "100%",
        paddingLeft: 2,
        paddingRight: 2
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 4,
        boxShadow: "1px 1px 6px black"
    }
}
const musicData = [
    {
        image: musicImg1,
        music: music1
    },
    {
        image: musicImg2,
        music: music2
    },
    {
        image: musicImg3,
        music: music3
    },
    {
        image: musicImg4,
        music: music4
    },
]
const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const currentMusic = useSelector((state: RootState) => state.musicplayer.currentMusic)
    const handleToggle = () => {
        if (isPlaying) {
            audioRef?.current?.pause();
        } else {
            audioRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} spacing={3}>
            <Box component={'img'} src={musicData[currentMusic].image} sx={styles.image} />
            <audio ref={audioRef} src={musicData[currentMusic].music} autoPlay />
            <PlayerButtons isPlaying={isPlaying}
                onToggle={handleToggle} />
        </Stack>
    )
}
export default MusicPlayer