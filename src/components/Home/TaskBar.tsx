import { Box, Stack, Typography } from "@mui/material"
import Start from "./Start"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import { useEffect } from "react"
import aboutme from '../../assets/about.webp'
import resume from '../../assets/resume.webp'
import project from '../../assets/projects.webp'
import contectme from '../../assets/contact.webp'
import imageViewerImage from '../../assets/photos.webp'
import mediaPlayerImage from '../../assets/mediaPlayer.webp'
import musicPlayerImage from '../../assets/music.webp'
import cmd from '../../assets/cmd.webp'
import { resetMinimizeWindow } from "../../features/WindowSlice/WindowSlice"
import fullscreenIcon from '../../assets/fullscreen.webp'
import crtIcon from '../../assets/crt.webp'
import welcomeIcon from '../../assets/welcome.webp'
const data = [
    {
        icon: aboutme,
        title: "About me",

    },
    {
        icon: resume,
        title: "My Resume",

    },
    {
        icon: project,
        title: "My Projects",

    },
    {
        icon: contectme,
        title: "Contact Me",

    },
    {
        icon: imageViewerImage,
        title: "Image Viewer",
    },
    {
        icon: mediaPlayerImage,
        title: "Media Player",
    },
    {
        icon: musicPlayerImage,
        title: "Music Player",
    },
    {
        icon: cmd,
        title: "Command Prompt",
    },
]
const sideBarData = [
    fullscreenIcon, crtIcon, welcomeIcon
]
const styles = {
    root: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 28,
        backgroundColor: "#1855da"
    },
    box: {
        padding: 0.5,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: "#105496",
        width: 200,
        borderRadius: 1.2,
        height: 24,
        boxShadow: "inset 0.5px 1px 1px black",
        border: "none"
    },
    text: {
        fontSize: 12,
        color: "white"
    },
    timmerBar: {
        backgroundColor: "#0695f4",
        width: 150,
        height: 27,
        boxSizing: "border-box",
        padding: 0.7
    },
    time: {
        fontSize: 12.5,
        fontFamily: "Roboto Condensed"
    }
}
const TaskBar = () => {
    const dispatch = useDispatch();
    const minimizeWindowArray = useSelector((state: RootState) => state.window.minimizeWindowArray);
    const minimizeColorWindowArray = useSelector((state: RootState) => state.window.minimizeColorWindowArray)
    const indiaTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    useEffect(() => {
    }, [minimizeWindowArray, minimizeColorWindowArray])
    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'}>
            <Start />
            <Stack direction={'row'} alignContent={'center'} width={'100%'} spacing={0.5}>
                {
                    minimizeWindowArray.map((value, index) => {
                        return (
                            <Stack key={index} sx={styles.box} component={'button'} direction={'row'} alignItems={'center'} spacing={1} style={{ backgroundColor: minimizeColorWindowArray.includes(value) ? "#2b96eb" : "" }} onClick={() => dispatch(resetMinimizeWindow(value))}>
                                <Box component={'img'} src={data[data.findIndex(item => item.title === value)].icon} sx={{ width: 15, height: 15, objectFit: "cover" }} />
                                <Typography sx={styles.text}>{value}</Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
            <Stack justifySelf={'flex-end'} sx={styles.timmerBar} justifyContent={'center'}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                    {
                        sideBarData.map((value, index) => {
                            return (
                                <Box component={'img'} src={value} key={index} sx={{ width: 15, height: 15, objectFit: "cover" }} />
                            )
                        })
                    }
                    <Typography sx={styles.time} alignSelf={'flex-end'}>{indiaTime}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default TaskBar