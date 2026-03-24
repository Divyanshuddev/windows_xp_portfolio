import { Stack } from "@mui/material"
import AllButtons from "./AllButttons"

const styles = {
    root: {
        width: "100%",
        position: "relative",
    },
    controllerContainer: {
        top:"25%",
        left:"38.5%",
        width: "100%",
        
    }
}
interface ControllersProps{
    handleToggleFunc:()=>void;
}
const Controllers = ({handleToggleFunc}:ControllersProps) => {
    return (
        <Stack sx={styles.root}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="115" viewBox="0 0 558 69" preserveAspectRatio="xMidYMid slice" color-interpolation="linearrgb" style={{ display: "block" }}>
                <defs>
                    <linearGradient id="outer-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stop-color="#636c87"></stop>
                        <stop offset="0.25" stop-color="#3f4557"></stop>
                        <stop offset="0.375" stop-color="#2e333f"></stop>
                        <stop offset="0.45" stop-color="#272b35"></stop>
                        <stop offset="0.5" stop-color="#17181d"></stop>
                        <stop offset="0.54" stop-color="#0a0a0b"></stop>
                        <stop offset="0.75" stop-color="#060609"></stop>
                        <stop offset="0.78" stop-color="#050608"></stop>
                        <stop offset="0.88" stop-color="#050608"></stop>
                        <stop offset="0.93" stop-color="#141929"></stop>
                        <stop offset="0.98" stop-color="#2c3555"></stop>
                    </linearGradient>
                    <linearGradient id="tray-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0.02" stop-color="#959fb9"></stop>
                        <stop offset="0.04" stop-color="#616b87"></stop>
                        <stop offset="0.125" stop-color="#576077"></stop>
                        <stop offset="0.25" stop-color="#4c5568"></stop>
                        <stop offset="0.48" stop-color="#3c4352"></stop>
                        <stop offset="0.51" stop-color="#111111"></stop>
                        <stop offset="0.80" stop-color="#121212"></stop>
                        <stop offset="0.90" stop-color="#141a2a"></stop>
                        <stop offset="0.98" stop-color="#424c74"></stop>
                    </linearGradient>
                    <linearGradient id="tray-edge-o" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0.39" stop-color="#5e677f"></stop>
                        <stop offset="0.70" stop-color="#15161d"></stop>
                        <stop offset="0.75" stop-color="#0d0d0e"></stop>
                    </linearGradient>
                    <linearGradient id="tray-edge-i" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0.70" stop-color="#0d0d0e"></stop>
                        <stop offset="0.75" stop-color="#15161d"></stop>
                        <stop offset="0.98" stop-color="#414c73"></stop>
                    </linearGradient>
                    <path id="tray-boundary-path" d="M -10 12.5 L 0 12.5 Q 32 12.5 55 40 C 71 61 73 69 95 69 L 463 69 C 485 69 487 61 503 40 Q 526 12.5 556 12.5 L 566 12.5 l 0 -12.5 L -10 0 z"></path>
                    <clipPath id="no-borders"><rect y="1" width="100%" height="67"></rect></clipPath>
                    <mask id="tray-area"><use href="#tray-boundary-path" fill="#FFF"></use></mask>
                    <mask id="non-tray-area"><rect width="558" height="69" fill="#FFF"></rect><use href="#tray-boundary-path" fill="#000"></use></mask>
                </defs>
                <rect width="558" height="69" mask="url(#non-tray-area)" fill="url(#outer-fill)"></rect>
                <rect width="558" height="69" mask="url(#tray-area)" fill="url(#tray-fill)"></rect>
                <use href="#tray-boundary-path" fill="none" stroke="url(#tray-edge-o)" stroke-width="3" clip-path="url(#no-borders)" mask="url(#non-tray-area)"></use>
                <use href="#tray-boundary-path" fill="none" stroke="url(#tray-edge-i)" stroke-width="1" clip-path="url(#no-borders)"></use>
                <g stroke-width="2">
                    <line x1="-5%" x2="100%" y1="0" y2="0" stroke="#212224"></line>
                    <line x1="-5%" x2="100%" y1="69" y2="69" stroke="#161a20"></line>
                    <line x1="95" x2="463" y1="69" y2="69" stroke="#191d25"></line>
                </g>
            </svg>
            <Stack sx={styles.controllerContainer} style={{position:"absolute"}}>
               <AllButtons handleToggleFunc={handleToggleFunc}  />
            </Stack>

        </Stack>
    )
}
export default Controllers