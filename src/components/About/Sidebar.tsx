import {  Stack} from "@mui/material"
import github from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import DropDownPanel from "./DropDownPanel";
import cplusplusIcon from '../../assets/Cplusplus.png'
import pythonIcon from '../../assets/pythoncli.png'
import golangIcon from '../../assets/golang.webp'
import typescriptIcon from '../../assets/typescript.png'
import javascript from '../../assets/javascipt.png'
import reactIcon from '../../assets/react.svg'
import reduxIcon from '../../assets/redux.png'
import reactNative from '../../assets/react.svg'
import nextjsIcon from '../../assets/nextjs.png'
import djangoIcon from '../../assets/djnago.png'
import fastapiIcon from '../../assets/nextjs.png'
import materialUIIcon from '../../assets/materialUI.png'
import tailwindcssIcon from '../../assets/tailwindcss.png'
const styles = {
    root: {
        width: "100%",
         minHeight:585,
        maxHeight:930,
        boxSizing: "border-box",
        paddingTop: 2.3,
        paddingLeft: 1,
        paddingRight: 1,
        paddingBottom: 2
    },
}

const SocialLinks =[
    {
        icon:github,
        title:"Github"
    },
    {
        icon:linkedinIcon,
        title:"Linkedin"
    },
    {
        icon:whatsappIcon,
        title:"Whatsapp"
    },
    
]
const ProgrammingLanguages = [
    {
        icon: cplusplusIcon,
        title: "C/C++"
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
        icon: javascript,
        title: "Javascript"
    },
]
const Framworks=[
    {
        icon:reactIcon,
        title:"React JS"
    },
     {
        icon:reduxIcon,
        title:"Redux Toolkit"
    },
     {
        icon:reactNative,
        title:"React Native"
    },
     {
        icon:nextjsIcon,
        title:"Next JS"
    },
     {
        icon:djangoIcon,
        title:"Django"
    },
     {
        icon:fastapiIcon,
        title:"Fast API"
    },
    {
        icon:materialUIIcon,
        title:"Material UI"
    },
     {
        icon:tailwindcssIcon,
        title:"Tailwind CSS"
    },
]
const Sidebar = () => {
    return (
        <Stack sx={styles.root} spacing={1}>
        <DropDownPanel title={"Social Links"} list={SocialLinks} expandIconAlternate={true} />
        <DropDownPanel title={"Programming Language"} list={ProgrammingLanguages} expandIconAlternate={false}  />
        <DropDownPanel title={"Frameworks"} list={Framworks} expandIconAlternate={false}  />
        </Stack>
    )
}

export default Sidebar