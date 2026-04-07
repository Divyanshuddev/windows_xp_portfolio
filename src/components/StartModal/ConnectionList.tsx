import { Box, Stack, Typography } from "@mui/material"
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedIn.png'
import whatasapp from '../../assets/whatsapp.png'
import cmd from '../../assets/cmd.webp'
import resume from '../../assets/resume.webp'
import { useDispatch } from "react-redux"
import { openConnectionLinks } from "../../features/WindowSlice/WindowSlice"
const data = [
    {
        icon: github,
        title: "Github",
        fontWeight: "dark"
    },
    {
        icon: linkedin,
        title: "Linkedin",
        fontWeight: "dark"
    },
    {
        icon: whatasapp,
        title: "Whatsapp",
        fontWeight: "dark"
    },
    {
        icon: cmd,
        title: "Command Prompt",
        fontWeight: "none"
    },
    {
        icon: resume,
        title: "My Resume",
        fontWeight: "none"
    },
]
const styles = {
    image: {
        width: 26,
        height: 26,
        objectFit: "cover"
    },
    menuStack: {
        p: 1,
        "&:hover": {
            backgroundColor: "#2f71cd",
            cursor: "default",
            ".title": {
                color: "white"
            },
            ".arrow": {
                color: "white"
            }
        },
        border: "none",
        backgroundColor: "transparent"
    },
    title: {
        color: "black",
        fontSize: 14
    },
    arrorIcon: {
        color: "#262626"
    }
}

type ConnectionListProps = {
    start: number;
    end: number;
}
const ConnectionList = ({ start, end }: ConnectionListProps) => {
    const dispatch = useDispatch()
    return (
        <>
            {
                data.slice(start, end).map((value, index) => {
                    return (
                        <Stack key={index} sx={styles.menuStack} component={'button'} onClick={() => dispatch(openConnectionLinks(value.title))}>
                            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                <Box component={'img'} src={value.icon} sx={styles.image} />
                                <Typography className="title" sx={styles.title} style={{ fontWeight: value.fontWeight === "dark" ? "bolder" : "lighter", fontFamily: value.fontWeight === "none" ? "Roboto Condensed" : "" }}>{value.title}</Typography>
                            </Stack>
                        </Stack>
                    )
                })
            }
        </>
    )
}
export default ConnectionList