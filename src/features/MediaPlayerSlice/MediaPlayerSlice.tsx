import { createSlice } from "@reduxjs/toolkit";

export interface MediaPlayerState{
    currentVideo:number;
}

const initialState:MediaPlayerState={
    currentVideo:0
}

export const MediaPlayerSlice=createSlice({
    name:"mediaplayer",
    initialState:initialState,
    reducers:{
        setPrevVideo:(state)=>{
            if(state.currentVideo===0){
                state.currentVideo=3
            }
            else{
                state.currentVideo=state.currentVideo-1
            }
        },
        setNextVideo:(state)=>{
            if(state.currentVideo===3){
                state.currentVideo=0
            }
            else{
                state.currentVideo=state.currentVideo+1
            }
        }
    }
})

export const {setNextVideo,setPrevVideo} = MediaPlayerSlice.actions
export default MediaPlayerSlice.reducer