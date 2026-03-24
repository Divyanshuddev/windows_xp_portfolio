import { Box, Stack, Typography } from "@mui/material"
import projectIcon from '../../assets/projectNavBarIcon.png'
const styles ={
    icon:{
        width:50,
        height:50,
        objectFit:"cover"
    },
    myProjectText:{
        fontSize:20,
        fontFamily:"Oswald",

    }
}
const NavBarTitle = ()=>{
    return(
        <Stack direction={'row'} alignItems={'center'} spacing={0.5}>
            <Box component={'img'} src={projectIcon} sx={styles.icon} />
            <Typography sx={styles.myProjectText} style={{fontWeight:"bold"}}>MyProject</Typography>
        </Stack>
    )
}
export default NavBarTitle