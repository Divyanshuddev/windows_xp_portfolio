import { Box, Stack, Typography } from "@mui/material"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
import MobileScreenShareRoundedIcon from '@mui/icons-material/MobileScreenShareRounded';
import aiIcon from '../../assets/aiIcon.png'
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectedItemNavBar } from "../../features/ProjectSlice/ProjectSlice";
const list = [
    {
        title: "All",
        icon: <HomeRoundedIcon style={{ color: "white" }} fontSize="medium" />,
    },
    {
        title: "Web Apps",
        icon: <WebAssetRoundedIcon style={{ color: "white" }} />,
    },
    {
        title: "Mobile Apps",
        icon: <MobileScreenShareRoundedIcon style={{ color: "white" }} />,
    },
    {
        title: "Ai Apps",
        icon: <Box component={'img'} src={aiIcon} sx={{ width: 25, height: 25 }} />,
    },
    {
        title: "Games",
        icon: <SportsEsportsRoundedIcon style={{ color: "white" }} />,
    },
]

const SideBar = () => {
    const currentHeight = useSelector((state: RootState) => state.windowresize.height)
    const styles = {
        root: {
            width: 150,
            backgroundColor: "black",
            height: currentHeight,
            paddingTop: 2,
            paddingRight: 2,
            paddingLeft: 0.5
        },
        title: {
            fontFamily: "Roboto Condensed",
            fontSize:14
        },
        menuButton: {
            boxSizing: "border-box",
            paddingTop: 0.1,
            paddingBottom: 0.1,
            paddingRight: 0.5,
            paddingLeft: 1,
            background: "transparent",
            borderRight: "none",
            borderTop: "none",
            borderBottom: "none"
        },
        selectedButton: {
            boxSizing: "border-box",
            width: "100%",
            padding: 1,
            borderRadius: 5,
            paddingLeft: 2
        }
    }
    const selectedItem = useSelector((state: RootState) => state.project.selectedItem)
    const disableButtons = useSelector((state:RootState)=>state.project.showProjects)
    const dispatch = useDispatch();
    return (
        <Stack sx={styles.root} spacing={2} >
            {
                list.map((value, index) => {
                    return (
                        <Stack key={index} sx={styles.menuButton} style={{ borderLeft: selectedItem === value.title ? "2px solid red" : "2px solid transparent" }} component={'button'} disabled={disableButtons} onClick={() => dispatch(selectedItemNavBar(value.title))}>
                            <Stack sx={styles.selectedButton} style={{ backgroundColor: selectedItem === value.title ? "#161616" : "transparent" }}>
                                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                    <Stack>{value.icon}</Stack>
                                    <Typography sx={styles.title}>{value.title}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default SideBar