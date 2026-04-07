import { Stack } from "@mui/material"
import Profile from "./Profile"
import Logoff from "./Logoff"
import Overview from "./Overview"
import AllPrograms from "./AllPrograms"
import Connect from "./Connect"
const styles = {
    root: {
        position: "absolute",
        bottom: 30,
        left: 0,
        width: "20%",
        height: 500,
        backgroundColor: "white",
        borderRadius: 1,
        boxShadow: "1px 1px 10px black",
        zIndex: 100,
    },
    bars: {
        background: "linear-gradient(180deg,#1868ce 0,#0e60cb 12%,#0e60cb 20%,#1164cf 32%,#1667cf 33%,#1b6cd3 47%,#1e70d9 54%,#2476dc 60%,#297ae0 65%,#3482e3 77%,#3786e5 79%,#428ee9 90%,#4791eb)",
        height: 50,
    },
    menuStack: {
        height: 400,
    },
    secondMenuContainer: {
        backgroundColor: "#d2e5fa;",
        borderLeft: "0.0001px solid gray"
    }
}
const StartModal = () => {
    return (
        <Stack sx={styles.root} >
            <Stack sx={styles.bars} justifyContent={'center'} paddingLeft={1.5}>
                <Profile />
            </Stack>
            <Stack sx={styles.menuStack} direction={'row'} >
                <Stack width={'50%'} position={'relative'}>
                    <Overview />
                    <Stack position={'absolute'} bottom={0} width={'100%'}>
                        <AllPrograms />
                    </Stack>
                </Stack>
                <Stack width={'50%'} sx={styles.secondMenuContainer}>
                    <Connect />
                </Stack>
            </Stack>
            <Stack sx={styles.bars} justifyContent={'center'} alignItems={'flex-end'} paddingRight={1.5}>
                <Logoff />
            </Stack>
        </Stack>
    )
}

export default StartModal