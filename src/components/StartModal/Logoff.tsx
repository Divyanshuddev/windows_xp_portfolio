import { Box, Stack, Typography } from "@mui/material"
import logoffImage from '../../assets/logoff.webp'
import shutdownImage from '../../assets/shutdown.webp'
import { useDispatch } from "react-redux"
import { openLogoffModal, openShutDownModal } from "../../features/ModalSlice/ModalSlice"
import { openStart } from "../../features/StartSlice/StartSlice"
const styles = {
    image: {
        width: 28,
        height: 28,
        objectFit: "cover",
        opacity: 0.8,

    },
    textStyle: {
        fontSize: 14
    },
    buttons: {
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            ".logos": {
                opacity: 1
            }
        }
    }
}
const Logoff = () => {
    const dispatch = useDispatch()
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Stack direction={'row'} alignItems={'center'} spacing={1} component={'button'} sx={styles.buttons} onClick={() => { dispatch(openLogoffModal()), dispatch(openStart()) }}>
                <Box component={'img'} src={logoffImage} sx={styles.image} className="logos" />
                <Typography sx={styles.textStyle}>Log Off</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={1} component={'button'} sx={styles.buttons} onClick={() => { dispatch(openShutDownModal()), dispatch(openStart()) }}>
                <Box component={'img'} src={shutdownImage} sx={styles.image} className="logos" />
                <Typography sx={styles.textStyle}>Shut Down</Typography>
            </Stack>
        </Stack>
    )
}
export default Logoff