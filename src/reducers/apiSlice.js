import { createSlice } from '@reduxjs/toolkit'

export const apiSlice = createSlice({
  name: 'data',
  initialState: {
    dataSearch: '',
    dataSelect: '',
    userId: '',
    playlistId: ''
  },
  reducers: {
    getSearch: (state, action) => {
      state.dataSearch = action.payload
    },
    getSelect: (state, action) => {
      state.dataSelect = action.payload
    },
    getUserId: (state, action) => {
      state.userId = action.payload
    },
    getPlaylistId: (state, action) => {
      state.playlistId = action.payload
    }
  },
})

export const { getSearch, getSelect, getUserId, getPlaylistId } = apiSlice.actions

export default apiSlice.reducer