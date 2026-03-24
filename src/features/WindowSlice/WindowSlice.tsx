import { createSlice } from "@reduxjs/toolkit"

export interface WindowSliceState{
    aboutWindow:boolean;
    resumeWindow:boolean;
    projectWindow:boolean;
    contactWindow:boolean;
    imageViewerWindow:boolean;
    mediaPlayerWindow:boolean;
    maxi:boolean;
}

const initialState:WindowSliceState={
    aboutWindow:false,
    resumeWindow:false,
    projectWindow:false,
    contactWindow:false,
    imageViewerWindow:false,
    mediaPlayerWindow:false,
    maxi:false
}

export const windowSlice = createSlice({
    name:"window",
    initialState,
    reducers:{
        openAboutWindow:(state)=>{
            state.aboutWindow=true
        },

        closeAboutWindow:(state)=>{
            state.aboutWindow=false
        },
        openWindow:(state,action)=>{
            switch(action.payload){
                case 'About me':
                    state.aboutWindow=true
                    return
                case 'My Resume':
                    state.resumeWindow=true
                    return
                case 'My Projects':
                    state.projectWindow=true
                    return
                case 'Contact Me':
                    state.contactWindow=true
                    return
                case 'Image Viewer':
                    state.imageViewerWindow=true
                    return
                case 'Media Player':
                    state.mediaPlayerWindow=true
                    return
                default:
                    return
            }
           
        },
        fileBarWindow:(state,action)=>{
            switch(action.payload){
                case 'Exit':
                    state.aboutWindow=false
                    return 
                case 'Maximize':
                   
                    return
                case 'Minimize':
                    return
                default:
                    return
            }
        }
    }
})

export const {openAboutWindow,closeAboutWindow,fileBarWindow,openWindow} = windowSlice.actions

export default windowSlice.reducer