import { Box, Stack,  } from "@mui/material"
import loadingBar from '../../assets/loadingbar.png'
import * as motion from "motion/react-client"
const styles={
    root:{
        border:"2px solid gray",
        borderRadius:1.5,
        width:"10%",
        padding:0.2
    },
    loadingBar:{
        width:20,
        height:20,
        objectFit:"cover"
    }
}
const Loader=()=>{
    return(
        <Stack sx={styles.root}>
            <motion.div 
            initial={{x:"-40"}}
            // animate={{x:"200px"}}
            // transition={{delay:3,duration:3,type:"spring",stiffness:0,}}
            >
            <Stack direction={'row'} alignItems={'center'} spacing={0.2}>
            <Box component={'img'} src={loadingBar} sx={styles.loadingBar} />
            <Box component={'img'} src={loadingBar} sx={styles.loadingBar} />
            <Box component={'img'} src={loadingBar} sx={styles.loadingBar} />
            </Stack>
            </motion.div>
        </Stack>
    )
}

export default Loader