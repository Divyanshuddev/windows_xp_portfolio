import { Stack } from "@mui/material";
import home from "../assets/Home.jpg";
import TaskBar from "../components/Home/TaskBar";
import StartModal from "../components/StartModal/StartModal";
import CommonModal from "../components/Modal/CommonModal";
import DesktopStack from "../components/Home/DesktopStack";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useRef, useState } from "react";
import Window from "../components/Window/Window";
import SocialLinksModal from "../components/Modal/SocialLinksModal";
import ResumeWindow from "../components/Resume/ResumeWindow";
import ProjectWindow from "../components/Project/ProjectWindow";
import ContactMeWindow from "../components/ContactMe/ContactMeWindow";
import ImageViewerWindow from "../components/ImageViewer/ImageViewerWindow";
import MediaPlayerWindow from "../components/Media Player/MediaPlayerWindow";
import MusicPlayerWindow from "../components/Music Player/MusicPlayerWindow";
import CommandPromptWindow from "../components/Command Prompt/CommandPromptWindow";
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
};
const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const [zOrder, setZOrder] = useState<number[]>(windowIds);
  const bringToFront = (id: number) => {
    setZOrder((z) => [...z.filter((x) => x !== id), id]);
  };
  const getWindowPosition = (index: number) => ({
    top: 100 + index * 20,
    left: 150 + index * 20,
  });
  const startButtons = useSelector((state: RootState) => state.startButton.openStart);
  const logoffModal = useSelector((state: RootState) => state.modal.logoffModal);
  const shutdownModal = useSelector((state: RootState) => state.modal.shutdownModal);
  const socialLinkModal = useSelector((state: RootState) => state.modal.soicalLinksModal);
  const aboutWindow = useSelector((state: RootState) => state.window.aboutWindow);
  const resumeWindow = useSelector((state: RootState) => state.window.resumeWindow);
  const projectWindow = useSelector((state: RootState) => state.window.projectWindow);
  const contactWindow = useSelector((state: RootState) => state.window.contactWindow);
  const imageViewerWindow = useSelector((state: RootState) => state.window.imageViewerWindow);
  const mediaPlayerWindow = useSelector((state: RootState) => state.window.mediaPlayerWindow);
  const musicPlayerWindow = useSelector((state: RootState) => state.window.musicPlayerWindow);
  const commandPromptWindow = useSelector((state: RootState) => state.window.commandPromptWindow);
  return (
    <Stack sx={styles.root} position="relative" ref={containerRef}>
      <Stack sx={styles.container}>
        <DesktopStack />
      </Stack>
      {aboutWindow && (
        <Window
          id={1}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(1) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(0)}
        />
      )}
      {resumeWindow && (
        <ResumeWindow
          id={2}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(2) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(1)}
        />
      )}
      {projectWindow && (
        <ProjectWindow
          id={3}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(3) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(2)}
        />
      )}
      {contactWindow && (
        <ContactMeWindow
          id={4}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(4) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(3)}
        />
      )}
      {imageViewerWindow && (
        <ImageViewerWindow
          id={5}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(5) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(4)}
        />
      )}
      {mediaPlayerWindow && (
        <MediaPlayerWindow
          id={6}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(6) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(5)}
        />
      )}
      {musicPlayerWindow && (
        <MusicPlayerWindow
          id={7}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(7) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(6)}
        />
      )}
      {commandPromptWindow && (
        <CommandPromptWindow
          id={8}
          containerRef={containerRef}
          zIndex={zOrder.indexOf(8) + 1}
          bringToFront={bringToFront}
          defaultPosition={getWindowPosition(7)}
        />
      )}
      {startButtons && <StartModal />}
      <TaskBar />
      {logoffModal && <CommonModal open={logoffModal} header="Log" />}
      {shutdownModal && <CommonModal open={shutdownModal} header="Turn" />}
      {socialLinkModal && <SocialLinksModal />}
    </Stack>
  );
};

export default Home;