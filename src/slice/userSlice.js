import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',                                                                 
  initialState: {
    userData: null
  },
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const {userData} = counterSlice.actions

export default counterSlice.reducer