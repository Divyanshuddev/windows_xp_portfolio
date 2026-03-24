import { Stack } from "@mui/material"
import Sidebar from "./Sidebar"
import aboutbg from '../../assets/aboutbg.webp'
import AboutDetails from "./AboutDetails"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

const About = () => {
    const currentWidth=useSelector((state:RootState)=>state.windowresize.width)
     const currentHeight=useSelector((state:RootState)=>state.windowresize.height)
    const styles = {
    root: {
    },
    sidebar: {
        width: currentWidth===800?200:250,
        background: "linear-gradient(to bottom, #8f9fef 18%, #4f61d4 57%)",
       height:currentHeight===750?585:currentHeight,
        borderRight:"0.0001px solid #D8DADA"
    },
    about: {
        width: currentWidth===800?600:"100%",
        backgroundImage: `url(${aboutbg})`,
    },

    loadingWindow: {
        backgroundColor: "#e9e9e9",
       height:currentHeight===750?585:currentHeight,
    }
}
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    })
    return (
        <Stack>
            {
                loading ? (
                    <Stack sx={styles.root} direction={'row'} alignItems={'flex-start'}>
                        <Stack sx={styles.sidebar}>
                            <Sidebar />
                        </Stack>
                        <Stack sx={styles.about}>
                            <AboutDetails />
                        </Stack>
                    </Stack>
                ) : (
                    <Stack sx={styles.loadingWindow}></Stack>
                )
            }


        </Stack>
    )
}

export default About