import { createSlice } from '@reduxjs/toolkit';
import {data} from '../components/home/data';

export const sideSlice = createSlice({
  name: 'sidecounter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      if(state.value < data.length -1){
        state.value += 1
      }
    },
   decremented: state => {
     if(state.value > 0){
      state.value -= 1
     }
    }
  }
})

export const { increment, decremented } = sideSlice.actions

export default sideSlice.reducer