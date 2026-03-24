import { Stack } from "@mui/material"
import PlayButton from "./PlayButton"
interface AllButtonsProps{
    handleToggleFunc:()=>void;
}
const AllButtons = ({handleToggleFunc}:AllButtonsProps)=>{
    return(
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
             <PlayButton handleToggleFunc={handleToggleFunc} />
        </Stack>
    )
}
export default AllButtons