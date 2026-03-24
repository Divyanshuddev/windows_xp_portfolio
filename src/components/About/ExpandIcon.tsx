import { Box } from "@mui/material"
import pullupAltIcon from '../../assets/pullup-alt.webp'
import pullupIcon from '../../assets/pullup.webp'
const styles = {
    root:{
        width:16,
        height:16,
        objectFit:"cover"
    }
}
type ExpandIconProps={
    alternate:boolean;
}
const ExpandIcon = ({alternate}:ExpandIconProps)=>{
    return(
        <Box component={'img'} src={alternate?pullupAltIcon:pullupIcon} sx={styles.root} />
    )
}

export default ExpandIcon