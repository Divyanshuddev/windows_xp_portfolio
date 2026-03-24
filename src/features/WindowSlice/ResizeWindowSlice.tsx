import { createSlice } from "@reduxjs/toolkit";

export interface ResizeWindowState{
    width:number;
    height:number;
}

const initialState:ResizeWindowState={
    width:800,
    height:750
}

export const resizeWindowSlice = createSlice({
    name:"windowresize",
    initialState,
    reducers:{
        currentWindowSize:(state,action)=>{
            const {currentWidth,currentHeight} = action.payload
            state.width=currentWidth
            state.height=currentHeight
        }
    }
})

export const {currentWindowSize} = resizeWindowSlice.actions

export default resizeWindowSlice.reducer

