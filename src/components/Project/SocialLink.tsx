import { IconButton, Stack } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const styles = {
    icons: {
        color: "white",
        "&:hover": {
            color: "#FF6145"
        }
    }
}
const SocialLink = () => {
    return (
        <Stack direction={'row'} alignContent={'center'} >
            <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={() => window.open('https://github.com/Divyanshuddev', '_blank')}>
                <GitHubIcon sx={styles.icons} />
            </IconButton>
            <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={() => window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/', '_blank')}>
                <LinkedInIcon sx={styles.icons} />
            </IconButton>
            <IconButton disableFocusRipple disableRipple disableTouchRipple onClick={() => window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0', '_blank')}>
                <WhatsAppIcon sx={styles.icons} />
            </IconButton>
        </Stack>
    )
}
export default SocialLink