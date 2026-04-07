import { createSlice } from "@reduxjs/toolkit";

export interface ModalSliceType {
    restartModal: boolean;
    logoffModal: boolean;
    shutdownModal: boolean;
    soicalLinksModal: boolean;
    socialLinksCurrent: string;
}

const initialState: ModalSliceType = {
    restartModal: false,
    logoffModal: false,
    shutdownModal: false,
    soicalLinksModal: false,
    socialLinksCurrent: ""
}

export const ModalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {

        openRestartModal: (state) => {
            state.restartModal = true
        },

        openLogoffModal: (state) => {
            state.logoffModal = true
        },

        openShutDownModal: (state) => {
            state.shutdownModal = true
        },

        closeModal: (state) => {
            state.restartModal = false
            state.logoffModal = false
            state.shutdownModal = false
        },
        openSocialLinksModal: (state, action) => {
            state.soicalLinksModal = true
            state.socialLinksCurrent = action.payload;
        },
        closeSocilaLinksModal: (state) => {
            state.soicalLinksModal = false
        }
    }
})

export const { openRestartModal, openLogoffModal, openShutDownModal, closeModal, openSocialLinksModal, closeSocilaLinksModal } = ModalSlice.actions
export default ModalSlice.reducer
