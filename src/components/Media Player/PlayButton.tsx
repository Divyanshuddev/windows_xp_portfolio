import { Box, Stack } from "@mui/material"
import playButtonIcon from '../../assets/playButton.png'
import pauseButtonIcon from '../../assets/pauseButton.png'
import prevIcon from '../../assets/previousbutton.png'
import nextIcon from '../../assets/nextbutton.png'
import { motion } from "motion/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setNextVideo, setPrevVideo } from "../../features/MediaPlayerSlice/MediaPlayerSlice"
const styles = {
    icons: {
        width: 50,
        height: 50
    },
    buttons: {
        backgroundColor: "transparent",
        border: "none",
        "&:hover": {
            cursor: "pointer"
        }
    }
}
interface PlayButtonProps {
    handleToggleFunc: () => void;
}
const PlayButton = ({ handleToggleFunc }: PlayButtonProps) => {
    const [playPause, setPlayPause] = useState(true);
    const dispatch = useDispatch()
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <motion.div
                whileHover={{ scale: 1.5 }}
            >
                <Stack component={'button'} sx={styles.buttons} onClick={() => dispatch(setPrevVideo())}>
                    <Box component={'img'} src={prevIcon} sx={styles.icons} />
                </Stack>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
            >
                <Stack component={'button'} sx={styles.buttons} onClick={() => { handleToggleFunc(); setPlayPause(!playPause) }}>
                    <Box component={'img'} src={playPause ? pauseButtonIcon : playButtonIcon} sx={styles.icons} />
                </Stack>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.5 }}
            >
                <Stack component={'button'} sx={styles.buttons} onClick={() => dispatch(setNextVideo())}>
                    <Box component={'img'} src={nextIcon} sx={styles.icons} />
                </Stack>
            </motion.div>
        </Stack>
    )
}
export default PlayButton