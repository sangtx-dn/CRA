import { createSlice } from '@reduxjs/toolkit'

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: 0
  },
  reducers: {
    exampleAction: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { exampleAction } = exampleSlice.actions

export default exampleSlice.reducer
