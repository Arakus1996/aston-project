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
  error?: string
}

const initialState: State = {
  email: null,
  isLoading: true,
  error: '',
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
        state.error = ''
        state.isLoading = true
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.email = action.payload
        state.isLoading = false
      })
      .addCase(createUser.rejected, state => {
        state.error = 'Error Registration'
        state.isLoading = false
      })

      .addCase(signInUser.pending, state => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.email = action.payload
        state.isLoading = false
      })
      .addCase(signInUser.rejected, state => {
        state.error = 'Error Login'
        state.isLoading = false
      })

      .addCase(signOutUser.fulfilled, (state, action) => {
        state.email = action.payload
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.error = action.error.code
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
