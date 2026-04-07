import { Divider, Stack } from "@mui/material"
import NavBar from "./NavBar"
import SideBar from "./SideBar"
import ProjectCollection from "./ProjectCollection"

const ProjectPanel = () => {
    return (
        <Stack >
            <NavBar />
            <Divider style={{ backgroundColor: "#313131", height: "0.005rem" }} />
            <Stack direction={'row'} alignItems={'flex-start'}>
                <SideBar />
                <Divider component={'hr'} orientation="vertical" style={{ backgroundColor: "#313131", width: "0.005rem" }} flexItem />
                <ProjectCollection />
            </Stack>
        </Stack>
    )
}
export default ProjectPanel