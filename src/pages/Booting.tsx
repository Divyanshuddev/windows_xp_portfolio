import { Box, Stack, Typography } from "@mui/material"
import logo from '../assets/logo.png'
import Loader from "../components/Loader/Loader"
const styles = {
    root: {
        width: "100%",
        height: "100vh"
    },
    logo: {
        width: 150,
        height: 150,
        objectFit: "cover",
    },
    logoStack: {
        paddingRight: 10
    },
    divyanshu: {
        fontFamily: "Roboto Condensed",
        fontSize: 80
    },
    designation: {
        fontFamily: "Roboto Condensed",
        fontSize: 22,
    },
    xp: {
        color: "#d04a28",
        fontSize: 50,
    },
    portfolio: {
        position: "absolute",
        bottom: 40,
        right: 50,
        fontSize: 55,
        fontStyle: "italic"
    }
}

const Booting = () => {
    return (
        <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'} position={'relative'}>
            <Stack spacing={-3} >
                <Stack sx={styles.logoStack}>
                    <Box component={'img'} src={logo} sx={styles.logo} alignSelf={'flex-end'} />
                </Stack>
                <Stack direction={'row'}>
                    <Stack spacing={-4}>
                        <Typography sx={styles.divyanshu}>Divyanshu</Typography>
                        <Typography sx={styles.designation} alignSelf={'flex-end'}>Software Developer</Typography>
                    </Stack>
                    <Typography sx={styles.xp} style={{ fontWeight: "bolder" }}>xp</Typography>
                </Stack>
            </Stack>
            <Stack width={'100%'} alignItems={'center'} my={10}>
                <Loader />
            </Stack>
            <Typography sx={styles.portfolio}>Portfolio</Typography>
        </Stack>
    )
}

export default Booting