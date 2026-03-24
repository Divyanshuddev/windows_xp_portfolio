import { Box, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import recentlyUsed from '../../assets/recently-used.webp'
import AllProgramsPopover from "./AllProgramsPopover";
const styles = {
    image: {
        width: 26,
        height: 26,
        objectFit: "cover"
    },
    menuStack: {
        p: 1,
        "&:hover": {
            backgroundColor: "#2f71cd",
            cursor: "default",
            ".title": {
                color: "white"
            },
            ".arrow":{
                color:"white"
            }
        },
        border: "none",
        backgroundColor: "transparent"
    },
    title: {
        color: "black",
        fontSize: 14
    },
    arrorIcon: {
        color: "#262626"
    }
}
const RecentlyUsed  = ()=>{
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

    return(
        <Stack p={1}
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Stack direction={'row'} alignItems={'center'} spacing={1} >
                    <Box component={'img'} src={recentlyUsed} sx={styles.image} />
                    <Typography className="title" sx={styles.title} style={{ fontFamily: "Roboto Condensed" }}>Recently Used</Typography>
                </Stack>
                <Stack  >
                    <ArrowRightIcon sx={styles.arrorIcon} fontSize="small" className="arrow" />
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
                    <AllProgramsPopover type={"recentlyused"} />
                </Popover>
            </Stack>
    )
}

export default RecentlyUsed