import { Box, Stack } from "@mui/material"
import bluebar from '../../assets/bluebar.png'
import sideBar from '../../assets/sidebar.svg'
import Start from "./Start"

const styles={
    root:{
        position:"absolute",
        bottom:0,
        backgroundImage:`url(${bluebar})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
        height:30
    }
}
const TaskBar=()=>{
    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Start />
            <Box component={'img'} src={sideBar} sx={{width:150,height:30,objectFit:"cover"}} />
        </Stack>
    )
}

export default TaskBar