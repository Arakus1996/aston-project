import { createSlice } from '@reduxjs/toolkit'

import {
  createUser,
  getUserData,
  signInUser,
  signOutUser,
} from '../middleware/thunk/userThunk'

interface State {
  email: string | null
  isLoading: boolean
}

const initialState: State = {
  email: null,
  isLoading: true,
}

const userSlice = createSlice({
  name: 'USER',
  initialState: initialState,
  reducers: {
    setAuthUser(state, actions) {
      state.email = actions.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(createUser.pending, state => {
        state.isLoading = true
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.email = action.payload
      })

      .addCase(signInUser.pending, state => {
        state.isLoading = true
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload
      })

      .addCase(signOutUser.fulfilled, (state, action) => {
        state.email = action.payload
      })

      .addCase(getUserData.pending, state => {
        state.isLoading = true
      })
      .addCase(getUserData.fulfilled, state => {
        state.isLoading = false
      })
  },
})

export const { setAuthUser, setLoading } = userSlice.actions
export const userReducer = userSlice.reducer
