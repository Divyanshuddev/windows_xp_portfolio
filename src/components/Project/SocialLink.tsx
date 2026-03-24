import { IconButton, Stack } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const styles={
    icons:{
        color:"white",
        "&:hover":{
            color:"#FF6145"
        }
    }
}
const SocialLink = ()=>{
    return(
        <Stack direction={'row'} alignContent={'center'} >
            <IconButton disableFocusRipple disableRipple disableTouchRipple>
                <GitHubIcon sx={styles.icons} />
            </IconButton>
            <IconButton disableFocusRipple disableRipple disableTouchRipple>
                <LinkedInIcon sx={styles.icons} />
            </IconButton>
            <IconButton disableFocusRipple disableRipple disableTouchRipple>
                <WhatsAppIcon sx={styles.icons} />
            </IconButton>
        </Stack>
    )
}
export default SocialLink