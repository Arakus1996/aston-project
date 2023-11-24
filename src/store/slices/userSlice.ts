import { createSlice } from '@reduxjs/toolkit'

import {
  createUser,
  signInUser,
  signOutUser,
} from '../middleware/thunk/userThunk'

interface State {
  email?: string
  isLoading: boolean
}

const initialState: State = {
  email: '',
  isLoading: false,
}

const userSlice = createSlice({
  name: 'USER',
  initialState: initialState,
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = action.payload ? true : false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.email = action.payload
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload
      })
      .addCase(signOutUser.fulfilled, (state, action) => {
        state.email = action.payload
      })
  },
})

export const { toggleLoading } = userSlice.actions
export const userReducer = userSlice.reducer
