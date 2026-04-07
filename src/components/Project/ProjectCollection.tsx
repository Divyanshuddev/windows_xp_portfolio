import { Grid, Stack, } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import ecommerceImage1 from '../../assets/Projects/Ecommerce1.png'
import ecommerceImage2 from '../../assets/Projects/Ecommerce2.png'
import ecommerceImage3 from '../../assets/Projects/Ecommerce3.png'
import ecommerceImage4 from '../../assets/Projects/Ecommerce4.png'
import airbnbImage1 from '../../assets/Projects/Airbnb1.png'
import airbnbImage2 from '../../assets/Projects/Airbnb2.png'
import airbnbImage3 from '../../assets/Projects/Airbnb3.png'
import airbnbImage4 from '../../assets/Projects/Airbnb4.png'
import ProjectCard from "./ProjectCard"
import miroImage1 from '../../assets/Projects/miro1.png'
import miroImage2 from '../../assets/Projects/miro2.png'
import miroImage3 from '../../assets/Projects/miro3.png'
import miroImage4 from '../../assets/Projects/miro4.png'
import postPilot1 from '../../assets/Projects/PostPilot1.png'
import postPilot2 from '../../assets/Projects/PostPilot2.png'
import postPilot3 from '../../assets/Projects/PostPilot3.png'
import postPilot4 from '../../assets/Projects/PostPilot4.png'
import hangmanImage1 from '../../assets/Projects/Hangman1.png'
import hangmanImage2 from '../../assets/Projects/Hangman2.png'
import hangmanImage3 from '../../assets/Projects/Hangman3.png'
import scrollUp from '../../assets/scrollUp.svg'
import scrollDown from '../../assets/scrollDown.png'
import ProjectPreview from "./ProjectPreview"
const projectList = [
    {
        projectId: 1,
        title: "ShopSwift",
        images: [
            ecommerceImage1,
            ecommerceImage2,
            ecommerceImage3,
            ecommerceImage4
        ],
        category: "Web Apps",
        details: "Built a responsive and scalable e-commerce platform with product listing, filtering, cart, and checkout using React.js and Redux Toolkit. Developed secure backend APIs in Django REST Framework to manage users, products, and orders, including authentication and CRUD operations.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Redux Toolkit",
            "Responsive UI",
            "Material UI",
            "Python",
            "Django",
            "REST Framework"
        ],
        github: "https://github.com/Divyanshuddev/e-commerce-app",
        link: "https://e-commerce-app-beta-nine.vercel.app/"
    },
    {
        projectId: 2,
        title: "Airbnb Frontend Clone",
        images: [
            airbnbImage1,
            airbnbImage2,
            airbnbImage3,
            airbnbImage4
        ],
        category: "Web Apps",
        details: "Designed and implemented a pixel-perfect, responsive UI using React.js and Material-UI, replicating Airbnb’s layout and styling with TypeScript for type safety. Built dynamic pages and navigation using React Router, ensuring seamless client-side routing and enhanced user experience. Applied component reusability, responsive design principles, and clean architecture to improve scalability and maintainability across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
        ],
        github: "https://github.com/Divyanshuddev/airbnb-frontend-clone",
        link: "https://airbnb-frontend-clone-3fw1.vercel.app/"
    },
    {
        projectId: 3,
        title: "Miro",
        images: [
            miroImage1,
            miroImage2,
            miroImage3,
            miroImage4
        ],
        category: "Web Apps",
        details: "Integrated Framer Motion to implement scroll-based animations and micro-interactions, enhancing user engagement and UX flow. Followed a modular component architecture, enabling code reusability, easy maintenance, and consistent styling across the UI.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
            "Framer Motion Animation"
        ],
        github: "https://github.com/Divyanshuddev/miro-app",
        link: "https://miro-app-coral.vercel.app/"
    },
    {
        projectId: 4,
        title: "Post Pilot",
        images: [
            postPilot1,
            postPilot2,
            postPilot3,
            postPilot4
        ],
        category: "Web Apps",
        details: "Implemented Material-UI theming and components for a sleek, accessible, and customizable user interface across all device sizes. Built a modular and scalable codebase using functional components and hooks, following best practices in component-driven architecture.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Material UI",
        ],
        github: "https://github.com/Divyanshuddev/post_pilot_app",
        link: "https://post-pilot-app.vercel.app/"
    },
    {
        projectId: 5,
        title: "Hangman Game App",
        images: [
            hangmanImage1,
            hangmanImage2,
            hangmanImage3
        ],
        category: "Web Apps",
        details: "A fun and interactive Hangman Game app built with React.js, featuring multiple word categories, real-time guessing, and smooth animations. Designed with a modern, mobile-responsive UI and deployed on Vercel for seamless access across devices.",
        techStack: [
            "Typescript",
            "CSS",
            "React",
            "Responsive UI",
        ],
        github: "https://github.com/Divyanshuddev/hangman-game-app",
        link: "https://hangman-game-app-lac.vercel.app/"
    },

]
const ProjectCollection = () => {
    const currentWidth = useSelector((state: RootState) => state.windowresize.width)
    const currentHeight = useSelector((state: RootState) => state.windowresize.height)
    const displayProjectList = useSelector((state: RootState) => state.project.showProjects)
    const showProjectById = useSelector((state: RootState) => state.project.showProjectById)
    const styles = {
        root: {
            backgroundColor: "black",
            boxSizing: "border-box",
            width: currentWidth - 150,
            height: currentHeight - 240,
            padding: 2,
            "&::-webkit-scrollbar": {
                width: "17px"
            },
            "&::-webkit-scrollbar-corner": {
                background: "#dfdfdf"
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#c8d6fb",
                backgroundSize: "7px",
                border: " 1px solid #fff",
                borderRadius: "2px",
                boxShadow: "inset -3px 0 #bad1fc, inset 1px 1px #b7caf5"
            },
            "&::-webkit-scrollbar-track": {
                backgroundColor: "white"
            },
            "&::-webkit-scrollbar-button: vertical:decrement": {
                backgroundImage: `url(${scrollDown})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                border: "1.5px solid white"
            },
            "&-webkit-scrollbar-button: vertical:increment ": {
                backgroundImage: `url(${scrollUp})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                border: "1.5px solid white"
            }
        }
    }
    return (
        <Stack sx={styles.root} overflow={'auto'}>
            {
                displayProjectList ? (
                    <ProjectPreview images={projectList[showProjectById - 1].images} name={projectList[showProjectById - 1].title} details={projectList[showProjectById - 1].details} techStack={projectList[showProjectById - 1].techStack} githubLink={projectList[showProjectById - 1].github} liveLink={projectList[showProjectById - 1].link} />
                ) : (
                    <Grid container spacing={1}>
                        {
                            projectList.map((value, index) => {
                                return (
                                    <Grid size={currentHeight > 800 ? 3 : 6} key={index}>
                                        <ProjectCard image={value.images[0]} name={value.title} category={value.category} projectID={value.projectId} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                )
            }
        </Stack >
    )
}
export default ProjectCollection