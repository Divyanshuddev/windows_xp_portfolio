import { Box, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { closeProjectPreview } from "../../features/ProjectSlice/ProjectSlice";
const styles = {
    root:{
        backgroundColor: "#e9e9e9",
        boxSizing:"border-box",
        width: "100%",
        height: 50,
        paddingLeft:1,
        paddingTop:0

    },
    icon:{
        width:28,
        height:28,
        objectFit:"cover"
    },
    button:{
        backgroundColor:"transparent",
        boxSizing:"border-box",
        border:"1px solid transparent",
        padding:0.8,
        "&:hover":{
            border:"1px solid #b3b3b3",
            borderRadius:1
        }
    },
    disableButton:{
         backgroundColor:"transparent",
        border:"1px solid transparent",
        opacity:0.5

    },
    buttonText:{
        color:"black",
        fontSize:10,
    }
}
interface ButtonType{
    icon:string;
    name:string;
    disable:boolean;
}
interface ActionbarProps{
    list:ButtonType[]
}
const Actionbar =({list}:ActionbarProps)=>{
    const backWardButtonActive = useSelector((state:RootState)=>state.project.showProjects)
    const dispatch = useDispatch()
    return(
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} spacing={1}>
            {
                list.map((value,index)=>{
                    return(
                        <Stack component={'button'} direction={'row'} alignItems={'center'} spacing={1} key={index} sx={value.disable===!backWardButtonActive||value.name!=="Back"?styles.disableButton:styles.button} onClick={()=>dispatch(closeProjectPreview())}>
                            <Box component={'img'} src={value.icon} sx={styles.icon} />
                            <Typography sx={styles.buttonText}>{value.name}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}

export default Actionbar