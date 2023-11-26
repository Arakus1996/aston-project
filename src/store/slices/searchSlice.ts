import { createSlice } from '@reduxjs/toolkit'

interface State {
  value: string
}

const initialState: State = {
  value: '',
}

const searchSlice = createSlice({
  name: 'SEARCH',
  initialState: initialState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload
    },
  },
})

export const { setValue } = searchSlice.actions
export const searchReducer = searchSlice.reducer
