import { Box, Stack } from "@mui/material"
import video1 from '../../assets/Videos/Video1.mp4'
import video2 from '../../assets/Videos/Video2.mp4'
import video3 from '../../assets/Videos/Video3.mp4'
import video4 from '../../assets/Videos/Video4.mp4'
import { useRef } from "react";
import Controllers from "./Controllers";
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
const styles = {
  root: {
    width: "100%",
    position: "relative"
  }
}
const data = [video1, video2, video3, video4]
const VideosCollections = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentVideoIndex = useSelector((state:RootState)=>state.mediaplayer.currentVideo)
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <Stack>
      <Stack sx={styles.root}>
        <Box
          component="video"
          key={data[currentVideoIndex]}
          ref={videoRef}
          autoPlay
          sx={{
            width: "100%",
            boxShadow: 3,
            bgcolor: "black",
              // height:500
          }}
        >
          <source src={data[currentVideoIndex]} type="video/mp4" />
        </Box>

      </Stack>
      <Stack position={'absolute'} bottom={0} width={'100%'}>
        <Controllers handleToggleFunc={handleToggle} />
      </Stack>
    </Stack>
  )
}
export default VideosCollections