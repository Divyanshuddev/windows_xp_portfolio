import { Box, Stack } from "@mui/material"
import startButtonImage from '../../assets/startbutton.svg'
import { useDispatch } from "react-redux"
import { openStart } from "../../features/StartSlice/StartSlice"
const styles = {
    root: {
        backgroundColor: "transparent",
        border: "none",
        padding: 0,
        "&:hover": {
            ".startButton": {
                cursor: "pointer",
                opacity: 1
            }
        }
    },
    button: {
        width: 130,
        height: 30,
        objectFit: "cover",
        opacity: 0.9
    }
}
const Start = () => {
    const dispatch = useDispatch();
    return (
        <Stack component={'button'} sx={styles.root} onClick={() => dispatch(openStart())}>
            <Box component={'img'} src={startButtonImage} sx={styles.button} className="startButton" />
        </Stack>
    )
}
export default Start