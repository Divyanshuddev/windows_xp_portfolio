import { Box, Stack, Typography } from "@mui/material"
import minimize from '../../assets/minimize.svg'
import max from '../../assets/max.svg'
import close from '../../assets/close.svg'
import { useDispatch } from "react-redux"
import {closeWindow, minimizeWindow } from "../../features/WindowSlice/WindowSlice"
const styles = {
    root: {
        boxSizing:"border-box",
        width: "100%",
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop:1,
        paddingBottom:1
    },
    logo: {
        width: 20,
        height: 20,
        objectFit: "cover",
    },
    tools: {
        width: 20,
        height: 20,
        objectFit: "cover",
        opacity: 0.9,
        "&:hover": {
            opacity: 1
        }

    },
    title: {
        fontFamily: "Fraunces",
        fontSize: 15
    },
    button: {
        backgroundColor: "transparent",
        border: "none",
        width: "fit-content",
        padding: 0
    },
    disableButton:{
        backgroundColor: "transparent",
        border: "none",
        width: "fit-content",
        padding: 0,
        opacity:0.5
    }
}
interface HeaderProps {
  onToggleResize: () => void;
  title:string;
  icon:string;
}
const Header = ({ onToggleResize,title,icon}: HeaderProps) => {
    const dispatch = useDispatch();

    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box component={'img'} src={icon} sx={styles.logo} />
                <Typography sx={styles.title}>{title}</Typography>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={0.3}>
                <Stack component={'button'} sx={styles.button} onClick={()=>dispatch(minimizeWindow(title))}>
                    <Box component={'img'} src={minimize} sx={styles.tools} />
                </Stack>
                <Stack component={'button'} sx={title==='Contact Me'||title==='Music Player'?styles.disableButton:styles.button} onClick={()=>{onToggleResize()}} disabled={title==='Contact Me'||title==='Music Player'?true:false}>
                    <Box component={'img'} src={max} sx={styles.tools} />
                </Stack>
                <Stack component={'button'} sx={styles.button} onClick={() => dispatch(closeWindow(title))}>
                    <Box component={'img'} src={close} sx={styles.tools} />
                </Stack>
            </Stack>
        </Stack>
    )
}
export default Header