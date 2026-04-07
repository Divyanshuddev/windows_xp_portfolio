import { createSlice } from "@reduxjs/toolkit";

export interface StartSliceState {
    openStart: boolean
}

const initialState: StartSliceState = {
    openStart: false,
}

export const startSlice = createSlice({
    name: "startButton",
    initialState,
    reducers: {
        openStart: (state) => {
            state.openStart = !state.openStart;
        },
    }
})

export const { openStart } = startSlice.actions

export default startSlice.reducer

