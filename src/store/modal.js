import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false
  },
  reducers: {
    open: state => {
      state.value = !state.value
    },
  }
})

export const { open } = modalSlice.actions

export default modalSlice.reducer