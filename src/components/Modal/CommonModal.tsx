import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import bg from '../../assets/backe.png';
import logo from '../../assets/logo.png'
import restartImage from '../../assets/restart.webp'
import shutdownImage from '../../assets/shutdown.webp'
import logoffImage from '../../assets/logoff.webp'
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/ModalSlice/ModalSlice";
const styles = {
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        border: "0.5px solid black"
    },
    bars: {
        backgroundColor: "#0031A7",
        width: "100%",
        height: 60,
        boxSizing: "border-box",
        padding: 2
    },
    restartStack: {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: 150,
    },
    headerText: {
        fontSize: 22,
        fontFamily: "Roboto Condensed"
    },
    logo: {
        width: 45,
        height: 45,
        objectFit: "cover"
    },
    img: {
        width: 40,
        height: 40,
        objectFit: "contain"
    },
    restartButton: {
        backgroundColor: "transparent",
        width: "fit-content",
        border: "none",
        cursor: "pointer",
        "&:hover": {
            ".restartIcon": {
                boxShadow: "1px 1px 7px blue"
            }
        }
    },
    cancelButton: {
        width: "fit-content",
        textTransform: "capitalize",
        backgroundColor: "white",
        color: "black",
        paddingRight: 3,
        paddingLeft: 3,
        fontFamily: "Comic Neue",
        fontWeight: "bolder"
    }

};

type CommonModalProps = {
    open: boolean;
    header: string;
}
const CommonModal = ({ open, header }: CommonModalProps) => {
    const dispatch = useDispatch();
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styles.root}>
                <Stack sx={styles.bars} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography sx={styles.headerText}>{header} off Divyanshu XP</Typography>
                    <Box component={'img'} src={logo} sx={styles.logo} />
                </Stack>
                <Stack sx={styles.restartStack} justifyContent={'center'} alignItems={'center'}>
                    <Stack direction={'row'} alignItems={'center'} spacing={15}>
                        <Stack alignItems={'center'} spacing={2}>
                            <Stack component={'button'} sx={styles.restartButton} >
                                <Box component={'img'} src={restartImage} sx={styles.img} className="restartIcon" />
                            </Stack>
                            <Typography>Restart</Typography>
                        </Stack>
                        {
                            header === "Turn" ? (
                                <Stack alignItems={'center'} spacing={2} sx={{ opacity: 0.6 }}>
                                    <Box component={'img'} src={shutdownImage} sx={styles.img} />
                                    <Typography>Shut Down</Typography>
                                </Stack>
                            ) : (
                                <Stack alignItems={'center'} spacing={2}>
                                    <Box component={'img'} src={logoffImage} sx={styles.img} />
                                    <Typography>Log Off</Typography>
                                </Stack>
                            )
                        }
                    </Stack>
                </Stack>
                <Stack sx={styles.bars} alignItems={'flex-end'}>
                    <Button variant="contained" sx={styles.cancelButton} size="small" disableElevation disableFocusRipple disableRipple disableTouchRipple onClick={() => dispatch(closeModal())}>Cancel</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default CommonModal