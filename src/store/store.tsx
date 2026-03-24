import { combineReducers, configureStore } from '@reduxjs/toolkit'
import startSlice from '../features/StartSlice/StartSlice'
import modalSlice from '../features/ModalSlice/ModalSlice'
import windowSlice from '../features/WindowSlice/WindowSlice'
import windowResizeSlice from '../features/WindowSlice/ResizeWindowSlice'
import projectSlice from '../features/ProjectSlice/ProjectSlice'
import imageViewerSlice from '../features/ImageViewerSlice/ImageViewerSlice'
import mediaPlayerSlice from '../features/MediaPlayerSlice/MediaPlayerSlice'
const rootReducer = combineReducers({
  startButton:startSlice,
  modal:modalSlice,
  window:windowSlice,
  windowresize:windowResizeSlice,
  project:projectSlice,
  imageViewer:imageViewerSlice,
  mediaplayer:mediaPlayerSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch