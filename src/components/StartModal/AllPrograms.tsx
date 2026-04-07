import { Box, Popover, Stack, Typography } from "@mui/material"
import arrowImage from '../../assets/arrow.webp'
import AllProgramsPopover from "./AllProgramsPopover"
import { useState } from "react"

const styles = {
    root: {
        width: "100%",
        height: 50,
    },
    text: {
        fontWeight: "bolder",
        color: "black",
        fontSize: 15
    },
    arrowIcon: {
        width: 20,
        height: 20,
        objectFit: "cover"
    },
    pannel: {
        position: "absolute",
        top: 40,
        left: 50
    }
}
const AllPrograms = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [isHoveringPopover, setIsHoveringPopover] = useState(false);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setTimeout(() => {
            if (!isHoveringPopover) {
                setAnchorEl(null);
            }
        }, 100);
    };
    const open = Boolean(anchorEl);
    return (
        <Stack justifyContent={'center'} alignItems={'center'} sx={styles.root} position={'relative'}
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
        >
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography sx={styles.text}>All Programs</Typography>
                <Box component={'img'} src={arrowImage} sx={styles.arrowIcon} />
            </Stack>
            <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={() => setAnchorEl(null)}
                disableRestoreFocus
                PaperProps={{
                    onMouseEnter: () => setIsHoveringPopover(true),
                    onMouseLeave: () => {
                        setIsHoveringPopover(false);
                        setAnchorEl(null);
                    },
                    sx: {
                        paddingTop: 0.5,
                        paddingBottom: 0.5,
                        pointerEvents: 'auto',
                        transition: 'opacity 0.2s ease',
                        borderLeft: "2px solid #2f71cd"
                    },
                }}
            >
                <AllProgramsPopover type="allprograms" />
            </Popover>
        </Stack>
    )
}

export default AllPrograms