import { Box, Stack, Typography } from "@mui/material"
import profilePhoto from '../../assets/DivyanshuPhotos.png'
import { useNavigate } from "react-router-dom"
const styles = {
    root: {
        padding: 3,
        borderRadius: 4,
        backgroundColor: "transparent",
        border: "none",
        "&:hover": {
            background: "linear-gradient(90deg, #113fa6, #113fa6, #587cdb)",
            cursor: "pointer",
            backgroundColor: "blue",
            ".profile-border": {
                borderColor: "orange",
            },
            ".designation-color": {
                color: "#FFBF25"
            },
        },
    },
    profileBorder: {
        border: "5px solid white",
        borderRadius: 2
    },
    avatar: {
        width: 80,
        height: 80,
        objectFit: "cover",
        borderRadius: 1
    },
    name: {
        fontSize: 25,
        fontWeight: "bolder"
    },
    designation: {
        color: "#001963ff",
        fontWeight: "bolder",
        fontSize: 16
    }

}
const Profile = () => {
    const navigate = useNavigate();
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={5} sx={styles.root} component={'button'} onClick={() => navigate('/home')}>
            <Stack sx={styles.profileBorder} className="profile-border">
                <Box component={'img'} sx={styles.avatar} src={profilePhoto} />
            </Stack>
            <Stack>
                <Typography sx={styles.name}>Divyanshu Sharma</Typography>
                <Typography sx={styles.designation} className="designation-color">Software Developer</Typography>
            </Stack>
        </Stack>
    )
}
export default Profile