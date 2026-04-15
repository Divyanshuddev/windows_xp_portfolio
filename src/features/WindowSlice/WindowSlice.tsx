import { createSlice } from "@reduxjs/toolkit"
export interface WindowSliceState {
    aboutWindow: boolean;
    resumeWindow: boolean;
    projectWindow: boolean;
    contactWindow: boolean;
    imageViewerWindow: boolean;
    mediaPlayerWindow: boolean;
    musicPlayerWindow: boolean;
    commandPromptWindow: boolean;
    minimizeWindowArray: string[];
    maxi: boolean;
    minimizeAboutWindow: boolean;
    minimizeResumeWindow: boolean;
    minimizeProjectWindow: boolean;
    minimizeContactWindow: boolean;
    minimizeImageViewerWindow: boolean;
    minimizeMediaPlayerWindow: boolean;
    minimizeMusicPlayerWindow: boolean;
    minimizeCommandPromptWindow: boolean;
    minimizeColorWindowArray: string[];
    sendMessage: boolean;
    newMessage: boolean;
}

const initialState: WindowSliceState = {
    aboutWindow: false,
    resumeWindow: false,
    projectWindow: false,
    contactWindow: false,
    imageViewerWindow: false,
    mediaPlayerWindow: false,
    musicPlayerWindow: false,
    commandPromptWindow: false,
    minimizeWindowArray: [],
    maxi: false,
    minimizeAboutWindow: false,
    minimizeResumeWindow: false,
    minimizeProjectWindow: false,
    minimizeContactWindow: false,
    minimizeImageViewerWindow: false,
    minimizeMediaPlayerWindow: false,
    minimizeMusicPlayerWindow: false,
    minimizeCommandPromptWindow: false,
    minimizeColorWindowArray: [],
    sendMessage: false,
    newMessage: false,
}

export const windowSlice = createSlice({
    name: "window",
    initialState,
    reducers: {
        openWindow: (state, action) => {
            state.minimizeWindowArray = [...new Set([...state.minimizeWindowArray, action.payload])];
            switch (action.payload) {
                case 'About me':
                    state.aboutWindow = true
                    return
                case 'My Resume':
                    state.resumeWindow = true
                    return
                case 'My Projects':
                    state.projectWindow = true
                    return
                case 'Contact Me':
                    state.contactWindow = true
                    return
                case 'Image Viewer':
                    state.imageViewerWindow = true
                    return
                case 'Media Player':
                    state.mediaPlayerWindow = true
                    return
                case 'Music Player':
                    state.musicPlayerWindow = true
                    return
                case 'Command Prompt':
                    state.commandPromptWindow = true
                    return
                default:
                    return
            }
        },
        closeWindow: (state, action) => {
            const index = state.minimizeWindowArray.findIndex(item => item === action.payload);
            if (index !== -1) {
                state.minimizeWindowArray.splice(index, 1);
            }
            switch (action.payload) {
                case 'About me':
                    state.aboutWindow = false
                    return
                case 'My Resume':
                    state.resumeWindow = false
                    return
                case 'My Projects':
                    state.projectWindow = false
                    return
                case 'Contact Me':
                    state.contactWindow = false
                    return
                case 'Image Viewer':
                    state.imageViewerWindow = false
                    return
                case 'Media Player':
                    state.mediaPlayerWindow = false
                    return
                case 'Music Player':
                    state.musicPlayerWindow = false
                    return
                case 'Command Prompt':
                    state.commandPromptWindow = false
                    return
                default:
                    return
            }

        },
        minimizeWindow: (state, action) => {
            state.minimizeColorWindowArray = [...new Set([...state.minimizeColorWindowArray, action.payload])]
            switch (action.payload) {
                case 'About me':
                    state.minimizeAboutWindow = true
                    return
                case 'My Resume':
                    state.minimizeResumeWindow = true
                    return
                case 'My Projects':
                    state.minimizeProjectWindow = true
                    return
                case 'Contact Me':
                    state.minimizeContactWindow = true
                    return
                case 'Image Viewer':
                    state.minimizeImageViewerWindow = true
                    return
                case 'Media Player':
                    state.minimizeMediaPlayerWindow = true
                    return
                case 'Music Player':
                    state.minimizeMusicPlayerWindow = true
                    return
                case 'Command Prompt':
                    state.minimizeCommandPromptWindow = true
                    return
                default:
                    return
            }
        },
        resetMinimizeWindow: (state, action) => {
            const index = state.minimizeColorWindowArray.findIndex(item => item === action.payload);
            if (index !== -1) {
                state.minimizeColorWindowArray.splice(index, 1);
            }
            switch (action.payload) {
                case 'About me':
                    state.minimizeAboutWindow = false
                    return
                case 'My Resume':
                    state.minimizeResumeWindow = false
                    return
                case 'My Projects':
                    state.minimizeProjectWindow = false
                    return
                case 'Contact Me':
                    state.minimizeContactWindow = false
                    return
                case 'Image Viewer':
                    state.minimizeImageViewerWindow = false
                    return
                case 'Media Player':
                    state.minimizeMediaPlayerWindow = false
                    return
                case 'Music Player':
                    state.minimizeMusicPlayerWindow = false
                    return
                case 'Command Prompt':
                    state.minimizeCommandPromptWindow = false
                    return
                default:
                    return
            }
        },
        setSendMessage: (state, action) => {
            state.sendMessage = action.payload
        },
        setNewMessage: (state, action) => {
            state.newMessage = action.payload
        },
        setActionBar: (state, action) => {
            switch (action.payload) {
                case 'LinkedIn':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/', '_blank')
                    return
                case 'Send Message':
                    state.sendMessage = true
                    return
                case 'New Message':
                    state.newMessage = true
                    return
                case 'Save':
                    window.open('https://drive.google.com/file/d/1DHnYxWIXCfEaSc4k-QlTQpowC01FokBa/view?usp=sharing', '_blank')
                    return
                default:
                    return
            }
        },
        fileBarWindow: (state, action) => {
            switch (action.payload) {
                case 'Exit':
                    state.aboutWindow
                    return
                case 'Save':
                    window.open('https://drive.google.com/file/d/1DHnYxWIXCfEaSc4k-QlTQpowC01FokBa/view?usp=sharing', '_blank')
                    return
                default:
                    return
            }
        },
        openConnectionLinks: (state, action) => {
            switch (action.payload) {
                case "Github":
                    window.open('https://github.com/Divyanshuddev', '_blank')
                    return
                case "Linkedin":
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/', '_blank')
                    return
                case "Whatsapp":
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0', '_blank')
                    return
                case 'My Resume':
                    state.minimizeWindowArray = [...new Set([...state.minimizeWindowArray, action.payload])];
                    state.resumeWindow = true
                    return
                case 'Command Prompt':
                    state.minimizeWindowArray = [...new Set([...state.minimizeWindowArray, action.payload])];
                    state.commandPromptWindow = true
                    return
                default:
                    return
            }
        }
    }
})

export const { fileBarWindow, openWindow, closeWindow, minimizeWindow, resetMinimizeWindow, setSendMessage, setNewMessage, setActionBar, openConnectionLinks } = windowSlice.actions

export default windowSlice.reducer