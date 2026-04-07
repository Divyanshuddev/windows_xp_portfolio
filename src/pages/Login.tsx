import { Box, Divider, IconButton, Stack, Typography, } from "@mui/material"
import bg from '../assets/backe.png'
import Name from "../components/Login/Name"
import Profile from "../components/Login/Profile"
import restartImage from '../assets/restart.webp'
import CommonModal from "../components/Modal/CommonModal"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { openRestartModal } from "../features/ModalSlice/ModalSlice"
const styles = {
    root: {
        width: "100%",
        height: "100vh"
    },
    bars: {
        backgroundColor: "#002d99",
        width: "100%",
        height: 120,

    },
    bar2: {
        backgroundColor: "#002d99",
        width: "100%",
        boxSizing: "border-box",
        padding: 5,
        height: 120,
    },
    profileStack: {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: 750,
    },
    restartImage: {
        width: 30,
        height: 30,
        objectFit: "cover",
        opacity: 0.7
    },
    restartStack: {
        "&:hover": {
            ".restartIcon": {
                opacity: 1,
                cursor: "pointer"
            }
        }
    }
}
const Login = () => {
    const dispatch = useDispatch();
    const restartModal = useSelector((state: RootState) => state.modal.restartModal);
    return (
        <Stack sx={styles.root} position={'relative'}>
            <Stack sx={styles.bars} />
            <Stack sx={styles.profileStack} justifyContent={'center'} alignItems={'center'}>
                <Stack direction={'row'} alignItems={'center'} spacing={10}>
                    <Name />
                    <Divider orientation="vertical" flexItem style={{ backgroundColor: "whitesmoke", height: 400 }} />
                    <Profile />
                </Stack>
            </Stack>
            <Stack sx={styles.bar2} style={{ position: "absolute", bottom: 0 }} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'} spacing={2} sx={styles.restartStack}>
                    <IconButton onClick={() => dispatch(openRestartModal())}>
                        <Box component={'img'} src={restartImage} sx={styles.restartImage} className="restartIcon" />
                    </IconButton>
                    <Typography>Restart Divyanshu XP</Typography>
                </Stack>
                <Stack>
                    <Typography>After you log on, the system's yours to expolore.</Typography>
                    <Typography>Every detail has been designed with a purpose</Typography>
                </Stack>
            </Stack>
            {restartModal && <CommonModal open={restartModal} header={"Turn"} />}
        </Stack>
    )
}
export default Login