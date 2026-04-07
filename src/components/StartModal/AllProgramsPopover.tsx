import { Box, Divider, Stack, Typography } from "@mui/material"
import about from '../../assets/about.webp'
import myproject from '../../assets/projects.webp'
import myresume from '../../assets/resume.webp'
import contactme from '../../assets/contact.webp'
import mediaplayer from '../../assets/mediaPlayer.webp'
import musicplayeer from '../../assets/music.webp'
import imageviwer from '../../assets/photos.webp'
import cmd from '../../assets/cmd.webp'
import TurboC from '../../assets/turboC.png'
import vscode from '../../assets/vscode.png'
import pycharm from '../../assets/pycharm.png'
import androidStudio from '../../assets/androidStudio.png'
import githubIcon from '../../assets/githubIcon.png'
import GitBash from '../../assets/gitbash.png'
import gitlab from '../../assets/gitlab.png'
import pythonCLI from '../../assets/pythoncli.png'
import tensorflow from '../../assets/tnsorflow.png'
import sqllite from '../../assets/sqlite.png'
import docker from '../../assets/docker.png'
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"
import lmStudioIcon from '../../assets/lmstudio.webp'
import openCVIcon from '../../assets/opencv.png'
import openRouterIcon from '../../assets/openrouter.webp'
import jupyterIcon from '../../assets/jupyternotebook.png'
const data = [
    {
        icon: about,
        title: "About me"
    },
    {
        icon: myproject,
        title: "My Projects"
    },
    {
        icon: myresume,
        title: "My Resume"
    },
    {
        icon: contactme,
        title: "Contact Me"
    },
    {
        icon: mediaplayer,
        title: "Media Player"
    },
    {
        icon: musicplayeer,
        title: "Music Player"
    },
    {
        icon: imageviwer,
        title: "Image Viewer"
    },
    {
        icon: cmd,
        title: "Command Prompt"
    }
]
const recentlyUsedData = [
    {
        icon: TurboC,
        title: "Turbo C"
    },
    {
        icon: lmStudioIcon,
        title: "LM Studio"
    },
    {
        icon: openCVIcon,
        title: "OpenCV"
    },
    {
        icon: openRouterIcon,
        title: "OpenRouter"
    },
    {
        icon: jupyterIcon,
        title: "Juputer Notebook"
    },
    {
        icon: vscode,
        title: "VS Code"
    },
    {
        icon: pycharm,
        title: "PyCharm"
    },
    {
        icon: androidStudio,
        title: "Android Studio"
    },
    {
        icon: githubIcon,
        title: "Github"
    },
    {
        icon: GitBash,
        title: "Bash Git"
    },
    {
        icon: gitlab,
        title: "Git Lab"
    },
    {
        icon: pythonCLI,
        title: "Python Compiler"
    },
    {
        icon: tensorflow,
        title: "TensorFlow"
    },
    {
        icon: sqllite,
        title: "SQLite"
    },
    {
        icon: docker,
        title: "Docker"
    },
]
const styles = {
    root: {
        width: 200,
        borderRadius: 0,

    },
    image: {
        width: 18,
        height: 18,
        objectFit: "cover"
    },
    title: {
        fontFamily: "Roboto Condensed",
        fontSize: 14,
        color: "black",

    },
    menuItem: {
        backgroundColor: "transparent",
        border: "none",
        "&:hover": {
            backgroundColor: "#2f71cd",
            ".title": {
                color: "white"
            }
        }
    }
}
type AllProgramsPopoverProps = {
    type: string;
}
const AllProgramsPopover = ({ type }: AllProgramsPopoverProps) => {
    const dispatch = useDispatch()
    return (
        <Stack sx={styles.root} spacing={1}>
            {
                type === "allprograms" ? (
                    <>
                        {
                            data.map((value, index) => {
                                return (
                                    <Stack key={index}>
                                        <Stack component={'button'} direction={'row'} alignItems={"center"} spacing={1} sx={styles.menuItem} onClick={() => dispatch(openWindow(value.title))}>
                                            <Box component={'img'} src={value.icon} sx={styles.image} />
                                            <Typography sx={styles.title} className="title">{value.title}</Typography>
                                        </Stack>
                                        {[3, 7].includes(index) && <Divider sx={{ paddingTop: 1 }} />}
                                    </Stack>
                                )
                            })
                        }
                    </>
                ) : (
                    <Stack sx={{ opacity: 0.7 }}>
                        {
                            recentlyUsedData.map((value, index) => {
                                return (
                                    <Stack key={index}>
                                        <Stack component={'button'} direction={'row'} alignItems={"center"} spacing={1} sx={styles.menuItem} >
                                            <Box component={'img'} src={value.icon} sx={styles.image} />
                                            <Typography sx={styles.title} className="title">{value.title}</Typography>
                                        </Stack>
                                    </Stack>
                                )
                            })
                        }
                    </Stack>
                )
            }
        </Stack>
    )
}
export default AllProgramsPopover