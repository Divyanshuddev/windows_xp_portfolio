import { Box, Stack, Typography } from "@mui/material"
import aboutme from '../../assets/about.webp'
import resume from '../../assets/resume.webp'
import project from '../../assets/projects.webp'
import contectme from '../../assets/contact.webp'
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"
const data = [
    {
        icons: aboutme,
        title: "About me",

    },
    {
        icons: resume,
        title: "My Resume",

    },
    {
        icons: project,
        title: "My Projects",

    },
    {
        icons: contectme,
        title: "Contact Me",

    },
]
const styles = {
    icon: {
        width: 60,
        height: 60,
        objectFit: "cover"
    },
    root: {
        width: 120,
        backgroundColor: "transparent",
        border: "none",
        p: 1,
        "&:hover": {
            backgroundColor: "#316ac538"
        }
    },
    title: {
        fontFamily: "Roboto Condensed",
        fontSize: 16
    },
    box: {
        cursor: "pointer"
    }
}
const DesktopStack = () => {
    const dispatch = useDispatch();
    return (
        <Stack spacing={3} position={'relative'} overflow={'hidden'} sx={{ height: "97vh" }}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} spacing={1} sx={styles.root} alignItems={'center'} component={'button'} onClick={() => dispatch(openWindow(value.title))}>
                            <Box component={'img'} src={value.icons} sx={styles.icon} />
                            <Typography sx={styles.title}>{value.title}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default DesktopStack