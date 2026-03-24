import { Box, Popover, Stack, Typography } from "@mui/material"
import { useState } from "react";
import logo from '../../assets/logo.png'
import PopoverList from "./PopoverList";
const styles = {
    root: {
        backgroundColor: "#e9e9e9",
        width: "100%",
        boxSizing: "border-box",
        height: 20,
    },
    menu: {
        color: "black",
        fontSize: 12,
        height:20,
        paddingLeft: 2,
        paddingRight: 2,
        "&:hover": {
            backgroundColor: "#2f71cd",
            color: "white",
        },
    },
    logo: {
        width: 17,
        height: 17,
        objectFit: "cover",

    },
    logoBar: {
        backgroundColor: "white",
        paddingLeft: 1,
        paddingRight: 1,
    }
}
interface MenuBarList{
    title:string;
    disable:boolean;
}
interface PopoverList{
    menu:string;
    active:boolean;
    menuBarList:MenuBarList[];
}
interface FileBarProps{
   maximized:()=>void;
   minimized:()=>void;
   popoverList:PopoverList[];
}
const Filebar = ({maximized,minimized,popoverList}:FileBarProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [list, setList] = useState<MenuBarList[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLElement>, list: MenuBarList[]) => {
        setAnchorEl(prev => (prev ? null : event.currentTarget))
        setList(list)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)
    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={0}>
                {
                    popoverList.map((value, index) => {
                        return (
                            <Stack justifyContent={'center'} alignItems={'center'}

                                key={index}
                            >
                                <Stack direction={'row'} alignItems={'center'} spacing={0}

                                    position={'relative'}
                                >
                                    <Typography sx={styles.menu}
                                        aria-haspopup="true"
                                        onClick={(e) => handleClick(e, value.menuBarList)}
                                    >{value.menu}</Typography>
                                </Stack>
                                <Popover
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    elevation={1}
                                    disableRestoreFocus
                                    PaperProps={{

                                        sx: {
                                            borderRadius: 0,
                                            marginY: 0.2,
                                            pointerEvents: 'auto',
                                            transition: 'opacity 0.2s ease',
                                        },
                                    }}
                                >
                                    <PopoverList list={list} maximized={maximized} minimized={minimized}  />
                                </Popover>
                            </Stack>
                        )
                    })
                }
            </Stack>
            <Stack sx={styles.logoBar} alignItems={'center'}>
                <Box component={'img'} src={logo} sx={styles.logo} />
            </Stack>
        </Stack>
    )
}

export default Filebar