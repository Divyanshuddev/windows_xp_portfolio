import { Box, Divider, Stack, Typography } from "@mui/material"
import about from '../../assets/about.webp'
import myproject from '../../assets/projects.webp'
import myresume from '../../assets/resume.webp'
import contactme from '../../assets/contact.webp'
import mediaplayer from '../../assets/mediaPlayer.webp'
import musicplayeer from '../../assets/music.webp'
import imageviwer from '../../assets/music.webp'
import cmd from '../../assets/cmd.webp'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedIn.png'
import whatsapp from '../../assets/whatsapp.png'
import TurboC from '../../assets/turboC.png'
import PhotoShop from '../../assets/PhotoShop.png'
import AfterEffect from '../../assets/afterEffect.png'
import Illustrator from '../../assets/illustrator.png'
import PremierePro from '../../assets/PremierePro .png'
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
import soundCloud from '../../assets/soundCloud.png'
const data = [
    {
        icon: about,
        title: "About Me"
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
    },
    {
        icon: github,
        title: "Github"
    },
    {
        icon: linkedin,
        title: "Linkedin"
    },

    {
        icon: whatsapp,
        title: "Whatsapp"
    },

]

const recentlyUsedData = [
    {
        icon: TurboC,
        title: "Turbo C"
    },
    {
        icon: PhotoShop,
        title: "Adobe PhotoShop"
    },
    {
        icon: AfterEffect,
        title: "Adobe AfterEffect"
    },
    {
        icon: Illustrator,
        title: "Adobe Illustrator"
    },
    {
        icon: PremierePro,
        title: "Adobe Premiere Pro"
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
    {
        icon: soundCloud,
        title: "SoundCloud"
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
    return (
        <Stack sx={styles.root} spacing={1}>
            {
                type === "allprograms" ? (
                    <>
                        {
                            data.map((value, index) => {
                                return (
                                    <Stack key={index}>
                                        <Stack component={'button'} direction={'row'} alignItems={"center"} spacing={1} sx={styles.menuItem} >
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
                    <Stack sx={{opacity:0.7}}>
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