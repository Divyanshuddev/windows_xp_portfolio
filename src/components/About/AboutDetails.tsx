import { Box, Stack, Typography } from "@mui/material"
import abhoutP1 from '../../assets/aboutP1.png'
import abhoutP2 from '../../assets/aboutP2.png'
import abhoutP3 from '../../assets/aboutP3.png'
import abhoutP4 from '../../assets/aboutP4.png'
import scrollUp from '../../assets/scrollUp.svg'
import scrollDown from '../../assets/scrollDown.png'
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
const data = [
    {
        avatar: abhoutP1,
        para: "I’m Divyanshu Sharma, a programmer focused on building scalable, high-performance digital products and turning complex ideas into reliable, real-world systems. I take on diverse technical challenges—whether that’s designing clean front-end architectures, integrating robust APIs, or exploring ambitious concepts like recreating full applications entirely in the browser. My foundation was shaped early through academics and sport, where discipline, teamwork, and working toward something bigger than yourself became core to how I work."
    },
    {
        avatar: abhoutP2,
        para: "Growing up, I learned how strong systems, structure, and consistency drive results. That mindset naturally led me to programming, where clean architecture, thoughtful design, and attention to detail define long-term product quality and scalability."
    },
    {
        avatar: abhoutP3,
        para: "After committing fully to software development, I trained formally and began working across front-end and full-stack projects, building user-focused interfaces and reliable backend systems. Working with modern frameworks and AI-powered tools pushed me into new territory, enabling me to build complex web experiences while continuously strengthening my technical depth."
    },
    {
        avatar: abhoutP4,
        para: "I first discovered focus, discipline, and the drive to constantly raise standards through sport—and programming reinforced all of it. I’m obsessed with code quality, process, and continuous improvement. My goal is to create software that has lasting impact."
    },
];
const styles = {
    root: {
        boxSize:"border-box",
        paddingTop: 3,
        paddingLeft: 5,
        paddingRight: 3,
        paddingBottom: 10,
        
        "&::-webkit-scrollbar": {
            width: "17px"
        },
        "&::-webkit-scrollbar-corner": {
            background: "#dfdfdf"
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#c8d6fb",
            backgroundSize: "7px",
            border: " 1px solid #fff",
            borderRadius: "2px",
            boxShadow: "inset -3px 0 #bad1fc, inset 1px 1px #b7caf5"
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "white"
        },
        "&::-webkit-scrollbar-button: vertical:decrement": {
            backgroundImage: `url(${scrollDown})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            border:"1.5px solid white"
        },
        "&-webkit-scrollbar-button: vertical:increment ": {
            backgroundImage: `url(${scrollUp})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
             border:"1.5px solid white"
        }
    },
    avatar: {
        width: 100,
        height: 100,
    },
    aboutMeText: {
        fontSize: 30,
        fontWeight: "bolder",
        color: "white"
    },
    paraText:{
        color:"white",
        fontFamily:"Comic Neue",
        fontSize:17,
    }

}
const AboutDetails = () => {
    const currentHeight=useSelector((state:RootState)=>state.windowresize.height)
    return (
        <Stack sx={[styles.root,{height:currentHeight===750?482:currentHeight}]} overflow={'auto !important'} >
            <Typography sx={styles.aboutMeText}>About Me</Typography>
            <Stack spacing={3}>
                {
                    data.map((value, index) => {
                        return (
                            <Stack key={index} direction={'row'} alignItems={"flex-start"} spacing={index===2?7:5}>
                                <Box component={'img'} src={value.avatar} sx={styles.avatar} />
                                <Typography sx={styles.paraText}>{value.para}</Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}

export default AboutDetails