import { createSlice } from "@reduxjs/toolkit";

export interface ProjectSliceState{
    selectedItem:string;
    showProjects:boolean;
    showProjectById:number;
}
const initialState:ProjectSliceState={
    selectedItem:'All',
    showProjects:false,
    showProjectById:1
}

export const projectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        selectedItemNavBar:(state,action)=>{
            state.selectedItem=action.payload
        },
        showProjectSection:(state,action)=>{
            state.showProjects=true
            state.showProjectById=action.payload
        },
        closeProjectPreview:(state)=>{
            state.showProjects=false
        }

    }
})

export const {selectedItemNavBar,showProjectSection,closeProjectPreview} = projectSlice.actions

export default projectSlice.reducer