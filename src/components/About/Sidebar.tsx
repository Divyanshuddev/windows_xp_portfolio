import { Stack } from "@mui/material"
import github from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import DropDownPanel from "./DropDownPanel";
import cplusplusIcon from '../../assets/Cplusplus.png'
import pythonIcon from '../../assets/pythoncli.png'
import golangIcon from '../../assets/golang.webp'
import typescriptIcon from '../../assets/typescript.png'
import reactIcon from '../../assets/react.svg'
import fastapiIcon from '../../assets/fastapi.png'
import sqlIcon from '../../assets/sql.png'
import pytorchIcon from '../../assets/pytorch.png'
import scikitLearnIcon from '../../assets/Scikit-learn.png'
import langchainIcon from '../../assets/langchain.webp'
import huggingFaceIcon from '../../assets/huggingface.webp'
import numpyIcon from '../../assets/numpy.png'
import pandasIcon from '../../assets/pandas.png'
const styles = {
    root: {
        width: "100%",
        minHeight: 585,
        maxHeight: 930,
        boxSizing: "border-box",
        paddingTop: 2.3,
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 2
    },
}
const SocialLinks = [
    {
        icon: github,
        title: "Github"
    },
    {
        icon: linkedinIcon,
        title: "Linkedin"
    },
    {
        icon: whatsappIcon,
        title: "Whatsapp"
    },
]
const ProgrammingLanguages = [
    {
        icon: cplusplusIcon,
        title: "C / C++"
    },
    {
        icon: pythonIcon,
        title: "Python"
    },
    {
        icon: golangIcon,
        title: "Go Lang"
    },
    {
        icon: typescriptIcon,
        title: "Typescript"
    },
    {
        icon: sqlIcon,
        title: "SQL"
    },
]
const Framworks = [
    {
        icon: fastapiIcon,
        title: "Fast API"
    },
    {
        icon: pytorchIcon,
        title: "PyTorch"
    },
    {
        icon: scikitLearnIcon,
        title: "Scikit-learn"
    },

    {
        icon: langchainIcon,
        title: "LangChain"
    },
    {
        icon: huggingFaceIcon,
        title: "Hugging Face"
    },
    {
        icon: numpyIcon,
        title: "NumPy"
    },
    {
        icon: pandasIcon,
        title: "Pandas"
    },
    {
        icon: reactIcon,
        title: "React JS"
    },
]
const Sidebar = () => {
    return (
        <Stack sx={styles.root} spacing={1}>
            <DropDownPanel title={"Social Links"} list={SocialLinks} expandIconAlternate={true} />
            <DropDownPanel title={"Programming Language"} list={ProgrammingLanguages} expandIconAlternate={false} />
            <DropDownPanel title={"Frameworks"} list={Framworks} expandIconAlternate={false} />
        </Stack>
    )
}
export default Sidebar