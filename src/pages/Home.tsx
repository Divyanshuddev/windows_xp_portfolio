import { Stack } from "@mui/material"
import home from "../assets/Home.jpg"
import TaskBar from "../components/Home/TaskBar"
import StartModal from "../components/StartModal/StartModal"
import CommonModal from "../components/Modal/CommonModal"
import DesktopStack from "../components/Home/DesktopStack"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { useRef, useState } from "react"
import Window from "../components/Window/Window"
import SocialLinksModal from "../components/Modal/SocialLinksModal"
import ResumeWindow from "../components/Resume/ResumeWindow"
import ProjectWindow from "../components/Project/ProjectWindow"
import ContactMeWindow from "../components/ContactMe/ContactMeWindow"
import ImageViewerWindow from "../components/ImageViewer/ImageViewerWindow"
import MediaPlayerWindow from "../components/Media Player/MediaPlayerWindow"

const styles = {
  root: {
    backgroundImage: `url(${home})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    p: 3,
  },
}

const Home = () => {
  const startButtons = useSelector(
    (state: RootState) => state.startButton.openStart
  )
  const logoffModal = useSelector(
    (state: RootState) => state.modal.logoffModal
  )
  const shutdownModal = useSelector(
    (state: RootState) => state.modal.shutdownModal
  )
  const socialLinkModal = useSelector((state:RootState)=>state.modal.soicalLinksModal)
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [windows] = useState([1, 2, 3, 4,5,6,7,8])
  const [zOrder, setZOrder] = useState<number[]>(windows)

  const bringToFront = (id: number) => {
    setZOrder((z) => [...z.filter((x) => x !== id), id])
  }
  const aboutWindow=useSelector((state:RootState)=>state.window.aboutWindow)
  const resumeWindow = useSelector((state:RootState)=>state.window.resumeWindow)
  const projectWindow = useSelector((state:RootState)=>state.window.projectWindow)
  const contactWindow = useSelector((state:RootState)=>state.window.contactWindow)
  const imageViewerWindow = useSelector((state:RootState)=>state.window.imageViewerWindow)
  const mediaPlayerWindow = useSelector((state:RootState)=>state.window.mediaPlayerWindow)
  return (
    <Stack sx={styles.root} position="relative" ref={containerRef}>
      <Stack sx={styles.container}>
        <DesktopStack />
      </Stack>
      {aboutWindow&& <Window key={1}
          id={1}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(1) + 1}
          bringToFront={bringToFront} />}
      {
        resumeWindow && <ResumeWindow
        key={2}
        id={2}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(2) + 1}
          bringToFront={bringToFront} 
        />
      }
      {
        projectWindow && <ProjectWindow
        key={3}
        id={3}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(3) + 1}
          bringToFront={bringToFront} 
        />
      }
      {
        contactWindow && <ContactMeWindow
        key={4}
        id={4}
        containerRef={containerRef}
        zIndex={zOrder.indexOf(4)+1}
        bringToFront={bringToFront} />
      }
      {
        imageViewerWindow && <ImageViewerWindow 
        key={5}
        id={5}
        containerRef={containerRef}
        zIndex={zOrder.indexOf(5)+1}
        bringToFront={bringToFront} />
      }{
        mediaPlayerWindow && <MediaPlayerWindow 
        key={6}
        id={6}
        containerRef={containerRef}
        zIndex={zOrder.indexOf(6)+1}
        bringToFront={bringToFront}
        />
      }
      {startButtons && <StartModal />}
      <TaskBar />
      {logoffModal && <CommonModal open={logoffModal} header="Log" />}
      {shutdownModal && <CommonModal open={shutdownModal} header="Turn" />}
      {socialLinkModal && <SocialLinksModal />}
    </Stack>
  )
}

export default Home

