import { Box, keyframes, Stack, Typography } from "@mui/material"
import dropDownIcon from '../../assets/tooldropdown.webp'
import goButtonIcon from '../../assets/go(gray).png'
const fillAndFade = keyframes`
  0% { background-position: 100% 0; opacity: 1; }
  90% { background-position: -80% 0; opacity: 1; }
  100% { background-position: 0% 0; opacity: 1;background:white }
`;
const styles = {
    root: {
        backgroundColor: "#e9e9e9",
        boxSizing: "border-box",
        width: "100%",
        height: 28,
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2.3,
        paddingBottom: 2.3
    },
    addressBox: {
        backgroundColor: "white",
        border: "1px solid #C2BCBC",
        width: "90%",
        boxSizing: "border-box",
        padding: 0.3,
        backgroundImage: 'linear-gradient(to right, #cae0e7ff 50%, #ffffff 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: '100% 0',
        animation: `${fillAndFade} 6s linear forwards`,
    },
    logo: {
        width: 15,
        height: 15,
        objectFit: "cover"
    },
    dropDownIcon: {
        width: 17,
        height: 20,
        objectFit: "cover"
    },
    goIcon: {
        width: 20,
        height: 20,
        objectFit: "cover"
    },
    addressText: {
        color: "black",
        opacity: 0.4,
        fontSize: 12,
    },
    title: {
        color: "black",
        fontSize: 12
    },
    goText: {
        color: "gray",
        fontSize: 12
    }
}
interface AddressbarProps {
    title: string;
    icon: string;
}
const Addressbar = ({ title, icon }: AddressbarProps) => {
    return (
        <Stack sx={styles.root} direction={'row'} alignItems={'center'} spacing={2}>
            <Typography sx={styles.addressText}>Address</Typography>
            <Stack sx={styles.addressBox} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction={'row'} alignItems={'center'} spacing={1} overflow={'hidden'} position={'relative'}>
                    <Box component={'img'} src={icon} sx={styles.logo} />
                    <Typography sx={styles.title}>{title}</Typography>
                </Stack>
                <Box component={'img'} src={dropDownIcon} sx={styles.dropDownIcon} />
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Box component={'img'} src={goButtonIcon} sx={styles.goIcon} />
                <Typography sx={styles.goText}>Go</Typography>
            </Stack>
        </Stack>
    )
}
export default Addressbar