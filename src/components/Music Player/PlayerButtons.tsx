import { Box, IconButton, Stack } from "@mui/material"
import plusButton from '../../assets/plus.png'
import minusButton from '../../assets/minus.png'
import backwardButton from '../../assets/musicbackward.png'
import forwardButton from '../../assets/musicforward.png'
import pausePlayButtom from '../../assets/pauseplaybutton.png'
import { useDispatch } from "react-redux"
import { setNextMusic, setPrevMusic } from "../../features/MusicPlayerSlice/MusicPlayerSlice"
const styles = {
    root: {
        width: 160,
        height: 160,
        borderRadius: "50%",
        border: "1px solid black"
    },
    innerContainer: {
        width: 140,
        height: 140,
        borderRadius: "50%",
        boxShadow: "1px 1px 50px black",
        border: "1px solid #3a383a",
        boxSizing: "border-box",
        padding: 0.5
    },
    buttonStyles: {
        width: 22,
        height: 22,
    }
}
interface PlayerButtonsProps {
    isPlaying: boolean;
    onToggle: () => void;
}
const PlayerButtons = ({ isPlaying, onToggle }: PlayerButtonsProps) => {
    const dispatch = useDispatch()
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
            <Stack sx={styles.innerContainer} direction={'column'} justifyContent={'space-between'}>
                <IconButton disableFocusRipple disableRipple >
                    <Box component={'img'} src={plusButton} sx={styles.buttonStyles} />
                </IconButton>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton disableFocusRipple disableRipple onClick={() => dispatch(setPrevMusic())}>
                        <Box component={'img'} src={backwardButton} sx={styles.buttonStyles} />
                    </IconButton>
                    <IconButton disableFocusRipple disableRipple onClick={onToggle} sx={{ background: isPlaying ? "" : "" }}>
                        <Box component={'img'} src={pausePlayButtom} sx={styles.buttonStyles} />
                    </IconButton>
                    <IconButton disableFocusRipple disableRipple onClick={() => dispatch(setNextMusic())}>
                        <Box component={'img'} src={forwardButton} sx={styles.buttonStyles} />
                    </IconButton>
                </Stack>
                <IconButton disableFocusRipple disableRipple >
                    <Box component={'img'} src={minusButton} sx={styles.buttonStyles} />
                </IconButton>
            </Stack>
        </Stack>
    )
}
export default PlayerButtons