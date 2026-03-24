import { createSlice } from "@reduxjs/toolkit";

export interface ImageViewerSliceState{
    currentImage:number;
}

const initialState:ImageViewerSliceState={
    currentImage:0
}

export const imageViewSlice = createSlice({
    name:"imageViewer",
    initialState:initialState,
    reducers:{
        setImageViewer:(state,action)=>{
            switch(action.payload){
                case 'Back':
                    if(state.currentImage===0){
                        state.currentImage=3
                    }
                    else{
                        state.currentImage=state.currentImage-1
                    }
                    return
                case 'Next':
                    if(state.currentImage===3){
                        state.currentImage=0
                    }
                    else{
                        state.currentImage=state.currentImage+1
                    }
                    return
                default:
                    return
            }
        }
    }
})

export const {setImageViewer} = imageViewSlice.actions

export default imageViewSlice.reducer