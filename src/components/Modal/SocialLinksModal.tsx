import { Box, Modal, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import closeIcon from '../../assets/close.svg'
import { closeSocilaLinksModal } from "../../features/ModalSlice/ModalSlice";
const styles = {
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius:1.5
    },
    header: {
        background: "linear-gradient(180deg, #0997ff, #0053ee 8%, #0050ee 40%, #06f 88%, #06f 93%, #005bff 95%, #003dd7 96%, #003dd7);",
        height: 32,
        boxSizing:"border-box",
        width: "100%",
        paddingLeft:1,
        paddingRight:1,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    closeIcon:{
        width:20,
        height:20,
        opacity:0.9,
        
    },
    headerIcon:{
        width:15,
        height:15
    },
    closeButton:{
        backgroundColor:"transparent",
        border:"none",
        "&:hover":{
            '.closeButton':{

                opacity:1
            }
        }
    },
    headerText:{
        fontSize:12,
        fontFamily:"Archivo Black"
    },
    modalContainer:{
        backhroundColor:"#ece9d8",
        boxSizing:"border-box",
        height:180,
        width:"100%",
        paddingTop:1,
        paddingBottom:1.5,
        paddingLeft:3,
        padding:3
    },
    containerIcon:{
        width:50,
        height:50
    },
    openLinkText:{
        color:"black",
        fontSize:18,
        fontFamily:"Archivo Black"
    },
    alertText:{
        color:"black",
        fontSize:14
    },
    button:{
        border:"1px solid black", 
        backgroundColor:"transparent",
        boxSizing:"border-box",  
        width:100,
        borderRadius:1,
        padding:0.001,
    },
    innderButton:{
        width:"100%",
        boxSizing:"border-box",  
        paddingTop:0.2,
        paddingBottom:0.2,
        borderRadius:0.7,
        "&:hover":{
            boxShadow: "inset -1px 1px #fff0cf, inset 1px 2px #fdd889, inset -2px 2px #fbc761, inset 2px -2px #e5a01a",
        }
    },
    buttonText:{
        color:"black",
        fontSize:12,
        fontFamily:"Roboto Condensed"
    }
}
const SocialLinksModal = () => {
    const openModal = useSelector((state: RootState) => state.modal.soicalLinksModal);
    const socialLink = useSelector((state: RootState) => state.modal.socialLinksCurrent);
    const dispatch = useDispatch();
    return (
        <Modal
            open={openModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles.root}>
                <Stack sx={styles.header} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Box component={'img'} src={socialLink==="Github"?githubIcon:socialLink==="Linkedin"?linkedinIcon:whatsappIcon} sx={styles.headerIcon} />
                        <Typography sx={styles.headerText}>Open Link</Typography>
                    </Stack>
                    <Stack component={'button'} sx={styles.closeButton} onClick={()=>dispatch(closeSocilaLinksModal())}>
                        <Box component={'img'} className="closeButton" src={closeIcon} sx={styles.closeIcon} />
                    </Stack>
                </Stack>
                <Stack sx={styles.modalContainer} justifyContent={'center'} alignItems={'center'} spacing={2}>
                    <Stack spacing={1} justifyContent={'center'} alignItems={'center'}>
                    <Box component={'img'} src={socialLink==="Github"?githubIcon:socialLink==="Linkedin"?linkedinIcon:whatsappIcon} sx={styles.containerIcon} />
                    <Typography sx={styles.openLinkText}>Open Link</Typography>
                    <Typography sx={styles.alertText}>Are you sure you want to open "{socialLink}"</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'} >
                        <Stack sx={styles.button} component={'button'} onClick={()=>dispatch(closeSocilaLinksModal())}>
                            <Stack sx={styles.innderButton}>
                                <Typography sx={styles.buttonText}>Cancel</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={styles.button} component={'button'}>
                            <Stack sx={styles.innderButton}>
                                <Typography sx={styles.buttonText}>Visit {socialLink}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default SocialLinksModal