import { Grid, Input, Stack, Typography } from "@mui/material"

const styles = {
    root: {
        backgroundColor: "#e9e9e9",
        width: 567,
        height: 372,
        padding: 2,
        },
    input: {
        border: "1px solid #d4d2d2",
        boxShadow: "inset 1px 2.5px 2.5px gray",
        fontSize: 13,
        borderRadius: 0.7,
        paddingLeft: 1,
        paddingRight: 0.5,
        backgroundColor:"white"
    },
    toInput:{
        border: "1px solid #d4d2d2",
        boxShadow: "inset 1px 2.5px 2.5px gray",
        fontSize: 13,
        borderRadius: 0.7,
        paddingLeft: 1,
        paddingRight: 0.5,
        backgroundColor:"white"
    },
    heading:{
        color:"black",
        fontSize:12
    }
}
const ContactPanel = () => {
    return (
        <Stack sx={styles.root}>
            <Grid container rowGap={1} width={"100%"} spacing={1} >
                <Grid size={2} sx={{placeItems:"end"}}  alignSelf={'center'}>
                    <Typography sx={styles.heading}>To:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.toInput} disableUnderline fullWidth value={'Divyanshu Sharma < divyanshu311098@gmail.com >'} disabled />
                </Grid>
                <Grid size={2} sx={{placeItems:"end"}}  alignSelf={'center'}>
                    <Typography sx={styles.heading}>From:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.input} disableUnderline fullWidth placeholder="Your email address" type="email" />
                </Grid>
                <Grid size={2} sx={{placeItems:"end"}}  alignSelf={'center'}>
                    <Typography sx={styles.heading}>Subject:</Typography>
                </Grid>
                <Grid size={10}>
                    <Input sx={styles.input} disableUnderline fullWidth placeholder="Subject of your Message" />
                </Grid>
                <Grid size={12}>
                    <Input sx={styles.input} disableUnderline fullWidth multiline minRows={12} placeholder="Write your message here"/>
                </Grid>
            </Grid>
        </Stack>
    )
}
export default ContactPanel