import { Box, Stack, Typography } from "@mui/material"
import divyanshuPhoto from '../../assets/DivyanshuPhotos.png'
const styles = {
    image: {
        width: 35,
        height: 35,
        objectFit: "cover",
        border: "2px solid white",
        borderRadius: 1
    }
}
const Profile = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Box component={'img'} src={divyanshuPhoto} sx={styles.image} />
            <Typography fontWeight={'bolder'}>Divyanshu Sharma</Typography>
        </Stack>

    )
}
export default Profile