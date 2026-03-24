import { Divider, Stack, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { fileBarWindow } from "../../features/WindowSlice/WindowSlice";

const styles={
    root:{
        backgroundColor:"#e9e9e9",
        boxSizing:"border-box",
        width:200
    },
    button:{
        width:"100%",
        paddingLeft:3,
        paddingRight:3,
        paddingTop:0.5,
        paddingBottom:0.5,
        border:0,
        backgroundColor:"transparent",
        color:"black",
        "&:hover":{
            backgroundColor:"#2f71cd",
            color:"white"
        }
    },
    disableButton:{
        width:"100%",
        paddingLeft:3,
        paddingRight:3,
        paddingTop:0.5,
        paddingBottom:0.5,
        border:0,
        backgroundColor:"transparent",
        color:"gray",
       
    },
    buttonText:{
        fontSize:12,
        textAlign:"left"
    }
}
interface ListType{
    title:string;
    disable:boolean;
}
interface PopoverListProps{
    list:ListType[];
    maximized:()=>void;
    minimized:()=>void;
}
const PopoverList =({list,maximized,minimized}:PopoverListProps)=>{
    const dispatch = useDispatch();
   return(
    <Stack sx={styles.root}>
        {
            list.map((value,index)=>{
                return(
                    <Stack key={index} >
                    <Stack  component={'button'} sx={value.disable?styles.disableButton:styles.button}   style={{display:value.title==="Divider"?"none":"block"}} onClick={()=>value.title==="Maximize"?maximized():value.title==="Minimize"?minimized():dispatch(fileBarWindow(value.title))} disabled={value.disable?true:false}>
                        <Typography sx={styles.buttonText} >{value.title}</Typography>
                    </Stack>
                    <Divider sx={{display:value.title==="Divider"?"block":"none"}} />
                    </Stack>
                )
            })
        }
    </Stack>
   )
}

export default PopoverList