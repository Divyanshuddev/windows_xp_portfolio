import { createSlice } from "@reduxjs/toolkit";

export interface MusicPlayerState {
    currentMusic: number;
}

const initialState: MusicPlayerState = {
    currentMusic: 0
}

export const MusicPlayerSlice = createSlice({
    name: "musicplayer",
    initialState: initialState,
    reducers: {
        setPrevMusic: (state) => {
            if (state.currentMusic === 0) {
                state.currentMusic = 3
            }
            else {
                state.currentMusic = state.currentMusic - 1
            }
        },
        setNextMusic: (state) => {
            if (state.currentMusic === 3) {
                state.currentMusic = 0
            }
            else {
                state.currentMusic = state.currentMusic + 1
            }
        }
    }
})

export const { setNextMusic, setPrevMusic } = MusicPlayerSlice.actions
export default MusicPlayerSlice.reducer