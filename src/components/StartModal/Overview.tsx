import { Box, Stack, Typography } from "@mui/material"
import myProjectsImage from '../../assets/projects.webp'
import contactMeImage from '../../assets/contact.webp'
import aboutMeImage from '../../assets/about.webp'
import imageViewerImage from '../../assets/photos.webp'
import mediaPlayerImage from '../../assets/mediaPlayer.webp'
import musicPlayerImage from '../../assets/music.webp'
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"
const data = [
    {
        icon: myProjectsImage,
        name: "My Projects",
        subName: "View my work",
        fontWeight: "dark"
    },
    {
        icon: contactMeImage,
        name: "Contact Me",
        subName: "Send me a message",
        fontWeight: "dark"
    },
    {
        icon: aboutMeImage,
        name: "About me",
        subName: "none",
        fontWeight: "none"
    },
    {
        icon: imageViewerImage,
        name: "Image Viewer",
        subName: "none",
        fontWeight: "none"
    },
    {
        icon: mediaPlayerImage,
        name: "Media Player",
        subName: "none",
        fontWeight: "none"
    },
    {
        icon: musicPlayerImage,
        name: "Music Player",
        subName: "none",
        fontWeight: "none"
    },
]

const styles = {
    icon: {
        width: 35,
        height: 35,
        objectFit: "cover"
    },
    menuItemsStack: {
        boxSizing: "border-box",
        padding: 1,
        height: 50,

        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#2f71cd",
            ".name": {
                color: "white"
            },

        },
        backgroundColor: "transparent",
        border: "none",
    },
    name: {
        fontSize: 15,
        color: "black",
    },
    subName: {
        fontSize: 10,
        color: "gray",
    }
}
const Overview = () => {
    const dispatch = useDispatch()
    return (
        <Stack spacing={1}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} sx={styles.menuItemsStack} justifyContent={'center'} component={'button'} onClick={() => dispatch(openWindow(value.name))}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1} >
                                <Box component={'img'} src={value.icon} sx={styles.icon} />
                                <Stack>
                                    <Typography sx={styles.name} style={{ fontWeight: value.fontWeight === "none" ? "none" : "bolder", fontFamily: value.fontWeight === "dark" ? "" : "Roboto Condensed" }} className="name">{value.name}</Typography>
                                    {
                                        value.subName !== "none" && <Typography sx={styles.subName} style={{ fontWeight: "lighter" }} className="name">{value.subName}</Typography>
                                    }
                                </Stack>
                            </Stack>

                        </Stack>
                    )
                })
            }
        </Stack>
    )
}

export default Overview