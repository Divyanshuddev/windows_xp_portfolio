import { Avatar, Box, Chip, Divider, IconButton, Stack, Typography } from "@mui/material"
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface ProjectPreviewProps {
    images: string[]
    name:string
    details:string
    techStack:string[]
    githubLink:string
    liveLink:string
}
const ProjectPreview = ({ images,name,details,techStack,githubLink,liveLink }: ProjectPreviewProps) => {
    const [crousal, setCrousal] = useState(0)
    const currentHeight = useSelector((state:RootState)=>state.windowresize.height)
    const handleBackward = () => {
        if (crousal === 0) {
            setCrousal(images.length - 1)
        }
        else {
            setCrousal(crousal - 1)
        }
    }
    const handleForward = () => {
        if (crousal === images.length - 1) {
            setCrousal(0)
        }
        else {
            setCrousal(crousal + 1)
        }
    }
    const handleDots=(e:number)=>{
        setCrousal(e)
    }
    const styles = {
    root: {

    },
    images: {
        width: currentHeight>800?"70%":"100%",
        height: currentHeight>800?600:350,
        borderRadius: 3,
        border: "3px solid red"
    },
    arrowIcons: {
        color: "white",
        "&:hover": {
            color: "red"
        }
    },
    dots:{
        width:15,
        height:15,
        border:"2px solid gray",
        borderRadius:"50%",
        backgroundColor:"transparent",
        cursor:"pointer"
    },
    detailStack:{
        backgroundColor:"#1e1e1e",
        padding:1.5,
        borderRadius:1,
    },
    headings:{
        color:"#8b898b",
        fontSize:18
    },
}
    
    return (
        <Stack spacing={3}>
            <Stack spacing={1}>
                <Box component={'img'} sx={styles.images} src={images[crousal]} alignSelf={'center'} />
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    <IconButton onClick={handleBackward}>
                        <ArrowCircleLeftOutlinedIcon sx={styles.arrowIcons} />
                    </IconButton>
                    <IconButton onClick={handleForward}>
                        <ArrowCircleRightOutlinedIcon sx={styles.arrowIcons} />
                    </IconButton>
                </Stack>
            </Stack>
             <Stack direction={'row'} alignItems={'center'} spacing={1} justifyContent={'center'}>
                    {
                        images.map((value,index)=>{
                            return(
                              <Stack component={'button'}  key={index} sx={styles.dots} style={{backgroundColor:index===crousal?"red":"transparent",borderColor:index===crousal?"red":"gray"}} onClick={()=>handleDots(index)}  />
                            )
                        })
                    }
                </Stack>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Avatar />
                <Typography>{name}</Typography>
                </Stack>
               
                <Stack direction={'row'} alignItems={'center'}>
                    <IconButton onClick={()=>window.open(githubLink,"_blank")}>
                        <GitHubIcon sx={styles.arrowIcons} />
                    </IconButton>
                    <IconButton onClick={()=>window.open(liveLink,"_blank")}>
                        <LaunchIcon sx={styles.arrowIcons} />
                    </IconButton>
                </Stack>
            </Stack>
            <Stack sx={styles.detailStack} spacing={2}>
                <Stack direction={'row'} alignItems={'flex-start'} spacing={3}>
                    <Typography sx={styles.headings}>Brief:</Typography>
                    <Typography color="white">{details}</Typography>
                </Stack>
                <Divider />
                <Stack direction={'row'} alignItems={'flex-start'} spacing={3}>
                    <Typography sx={styles.headings}>Tech:</Typography>
                    <Stack direction={'row'} alignContent={'center'} rowGap={1} columnGap={1} flexWrap={'wrap'}>
                        {
                            techStack.map((value,index)=>{
                                return(
                                      <Chip label={value} key={index} sx={{color:"white"}} variant="outlined" />

                                )
                            })
                        }
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProjectPreview