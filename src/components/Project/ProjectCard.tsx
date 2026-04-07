import { Avatar, Box, Stack, Typography } from "@mui/material"
import avatarImage from '../../assets/webAvatar.png'
import { useDispatch } from "react-redux"
import { showProjectSection } from "../../features/ProjectSlice/ProjectSlice"
const styles = {
    projectImage: {
        width: "100%",
        height: 200,
        borderRadius: 2,
    },
    avatar: {
        backgroundColor: "red"
    },
    name: {
        fontSize: 15,
        fontWeight: "bolder"
    },
    category: {
        fontSize: 14,
        color: "gray"
    },
    root: {
        padding: 2,
        borderRadius: 2,
        "&:hover": {
            backgroundColor: "#292829"
        },
        backgroundColor: "transparent",
        border: "none"
    }
}
interface ProjectCardProps {
    image: string
    name: string
    category: string
    projectID: number
}
const ProjectCard = ({ image, name, category, projectID }: ProjectCardProps) => {
    const dispatch = useDispatch();
    return (
        <Stack spacing={2} sx={styles.root} component={'button'} onClick={() => dispatch(showProjectSection(projectID))}>
            <Box component={'img'} src={image} sx={styles.projectImage} />
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Avatar sizes="small" src={avatarImage} sx={styles.avatar} />
                <Stack alignItems={'flex-start'}>
                    <Typography sx={styles.name}>{name}</Typography>
                    <Typography sx={styles.category}>Porsonal Work | {category}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default ProjectCard