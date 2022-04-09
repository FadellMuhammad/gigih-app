import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './reducers/apiSlice';

export default configureStore({
  reducer: {
    dataSearch: apiSlice,
    dataSelect: apiSlice,
    userId: apiSlice,
    playlistId: apiSlice
  },
})