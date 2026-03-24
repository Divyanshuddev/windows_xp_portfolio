import { Box, Stack, Typography } from "@mui/material"
import backIcon from '../../assets/back.webp'
import forwardIcon from '../../assets/forward.webp'
import zoomIcon from '../../assets/search.webp'
import printIcon from '../../assets/print.webp'
import saveIcon from '../../assets/save.webp'
import { useDispatch } from "react-redux"
import { setImageViewer } from "../../features/ImageViewerSlice/ImageViewerSlice"

const data = [
    {
        icon: backIcon,
        title: "Back",
        disable: false
    },
    {
        icon: forwardIcon,
        title: "Next",
        disable: false
    },
    {
        icon: printIcon,
        title: "",
        disable: true
    },
    {
        icon: zoomIcon,
        title: "Zoom",
        disable: true
    },
    {
        icon: saveIcon,
        title: "",
        disable: true
    }
]
const styles = {
    icon: {
        width: 30,
        height: 30
    },
    title: {
        color: "black",
        fontSize: 14
    },
    button: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: 1,
        borderRadius: 2,
        "&:hover": {
            border: "1px solid gray",
            cursor: "pointer"
        }
    },
    disableButton: {
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: 1,
        borderRadius: 2,
        opacity: 0.5
    }
}
const ImageSlider = () => {
    const dispatch = useDispatch();
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} direction={'row'} alignItems={'center'} spacing={1} component={'button'} sx={value.disable ? styles.disableButton : styles.button} onClick={() => dispatch(setImageViewer(value.title))}>
                            <Box component={'img'} sx={styles.icon} src={value.icon} />
                            <Typography sx={styles.title}>{value.title}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default ImageSlider