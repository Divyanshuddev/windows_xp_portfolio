import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material"
import ExpandIcon from "./ExpandIcon";
import { useDispatch } from "react-redux";
import { openSocialLinksModal } from "../../features/ModalSlice/ModalSlice";
interface ListData{
    icon:string;
    title:string;
}
type DropDownPanelProps={
    title:string;
    list:ListData[],
    expandIconAlternate:boolean
}
const styles = {
    accordian: {
        padding: 0
    },
    accordianSummary: {
        padding: 1.7,
        minHeight: 20,
        maxHeight: 20,
        '&.Mui-expanded': {
            minHeight: 20,
        },
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    accordianSummaryText: {
        fontSize: 11,
        fontWeight: "bold"
    },
    accordianDetails: {
        backgroundColor: "#c2d4ec"
    },
    socialIcon: {
        width: 15,
        height: 15,
        objectFit: "cover"
    },
    iconTitle:{
         fontSize: 12,
        color: "#0c327d",
    },
    socialIconTitle: {
        fontSize: 12,
        color: "#0c327d",
         "&:hover":{
            textDecoration:"underline"
        }
    },
    socialLinksStack: {
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none"
    }
}
const DropDownPanel = ({title,list,expandIconAlternate}:DropDownPanelProps)=>{
    const dispatch = useDispatch();
    return(
        <Stack>
             <Accordion elevation={0} defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandIcon alternate={expandIconAlternate} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={styles.accordianSummary}
                    style={{
                        background:title==="Social Links"?"linear-gradient(90deg, #054394 0, #0484fb)":"linear-gradient(90deg, #fff 0, #f0f0ff 50%, #c2d4ec)",
                        color:title==="Social Links"?"white":"#0c327d"
                    }}
                >
                    <Typography sx={styles.accordianSummaryText}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={styles.accordianDetails}>
                    <Stack spacing={0.5}>
                        {
                            list.map((values,index)=>{
                                return(
                                    <Stack key={index} direction={'row'} alignItems={'center'} spacing={1} sx={styles.socialLinksStack} component={'button'} onClick={()=>dispatch(openSocialLinksModal(`${values.title}`))}>
                                        <Box component={'img'} sx={styles.socialIcon} src={values.icon} />
                                        <Typography sx={title==="Social Links"?styles.socialIconTitle:styles.iconTitle}>{values.title}</Typography>
                                    </Stack>
                                )
                            })
                        }
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}

export default DropDownPanel