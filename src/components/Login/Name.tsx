import { Box, Stack, Typography } from "@mui/material"
import logo from '../../assets/logo.png'
const styles = {
    logo: {
        width: 100,
        height: 100,
        objectFit: "cover",
    },
    logoStack: {
        paddingRight: 10
    },
    divyanshu: {
        fontFamily: "Roboto Condensed",
        fontSize: 60
    },
    designation: {
        fontFamily: "Roboto Condensed",
        fontSize: 18,
    },
    xp: {
        color: "#d04a28",
        fontSize: 40,
    },
    loginStatement: {
        fontSize: 20,
        fontFamily: "Roboto Condensed",
    }
}
const Name = () => {
    return (
        <Stack spacing={5}>
            <Stack spacing={-2} alignSelf={'flex-end'}>
                <Stack sx={styles.logoStack}>
                    <Box component={'img'} src={logo} sx={styles.logo} alignSelf={'flex-end'} />
                </Stack>
                <Stack direction={'row'}>
                    <Stack spacing={-2.5}>
                        <Typography sx={styles.divyanshu}>Divyanshu</Typography>
                        <Typography sx={styles.designation} alignSelf={'flex-end'}>Software Developer</Typography>
                    </Stack>
                    <Typography sx={styles.xp} style={{ fontWeight: "bolder" }}>xp</Typography>
                </Stack>
            </Stack>
            <Typography sx={styles.loginStatement} >To begin, click on Divyanshu Sharma to log in</Typography>
        </Stack>
    )
}
export default Name