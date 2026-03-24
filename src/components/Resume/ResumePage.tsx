import { Box, Stack } from "@mui/material";
import { useState } from "react";
import resumePage from "../../assets/Divyanshu_Sharma_Resume-1.png";
import scrollUp from '../../assets/scrollUp.svg'
import scrollDown from '../../assets/scrollDown.png'
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
const ResumePage = () => {
  const currentHeight = useSelector((state:RootState)=>state.windowresize.height)
  const [scale, setScale] = useState(1);
  const handleClick = () => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  };
  const styles = {
    container: {
      width: "100%",
      overflow: "auto",
      boxSizing: "border-box",
      padding:5,
      height: currentHeight-125,
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
        border: "1.5px solid white"
      },
      "&-webkit-scrollbar-button: vertical:increment ": {
        backgroundImage: `url(${scrollUp})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "1.5px solid white"
      }
    },
    resumePageStyle: {
      height: 500,
      transition: "transform 0.25s ease",
      transformOrigin: "top center",
      display: "block"
    },
  };
  return (
    <Stack
      // justifyContent="center"
      alignItems="center"
      sx={styles.container}
    >
      <Box
        component="img"
        src={resumePage}
        onClick={handleClick}
        sx={{
          ...styles.resumePageStyle,
          transform: `scale(${scale})`,
          cursor: scale === 1 ? "zoom-in" : "zoom-out",
        }}
      />
    </Stack>
  );
};

export default ResumePage;


