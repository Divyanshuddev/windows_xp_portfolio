import { Box, Stack } from "@mui/material"
import ImageSlider from "./ImageSlider"
import myPhoto1 from '../../assets/MyPhoto/MyPhoto1.jpg'
import myPhoto2 from '../../assets/MyPhoto/MyPhoto2.jpg'
import myPhoto3 from '../../assets/MyPhoto/MyPhoto3.jpg'
import myPhoto4 from '../../assets/MyPhoto/MyPhoto4.jpg'
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
const myPhotosList = [
    myPhoto1, myPhoto2, myPhoto3, myPhoto4
]
const ImageContainer = () => {
    const currentImage = useSelector((state: RootState) => state.imageViewer.currentImage)
    const currentHeight = useSelector((state: RootState) => state.windowresize.height)
    const styles = {
        root: {
            backgroundColor: "#8e8e8e",
            width: "100%",
            height: currentHeight > 750 ? 760 : 560,
        },
        photo: {
            width: 500,
            height: 500,
            objectFit: "contain"
        }
    }
    return (
        <Stack>
            <Stack sx={styles.root} justifyContent={'center'} alignItems={'center'}>
                <Box component={'img'} src={myPhotosList[currentImage]} sx={styles.photo} />
            </Stack>
            <Stack alignItems={'center'} padding={1}>
                <ImageSlider />
            </Stack>
        </Stack>
    )
}
export default ImageContainer