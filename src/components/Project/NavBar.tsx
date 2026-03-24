import { Stack } from "@mui/material"
import NavBarTitle from "./NavBarTitle"
import SearchBar from "./SearchBar"
import SocialLink from "./SocialLink"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

const NavBar = ()=>{
    const currentWidth = useSelector((state:RootState)=>state.windowresize.width)
    console.log(currentWidth)
    const styles ={
    root:{
            backgroundColor:"black",
            bozSizing:"border-box",
            width:currentWidth-30,
            padding:2,
        }
    }

    return(
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <NavBarTitle />
            <SearchBar />
            <SocialLink />
        </Stack>
    )
}
export default NavBar