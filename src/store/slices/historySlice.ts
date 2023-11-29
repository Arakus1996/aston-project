import { createSlice } from '@reduxjs/toolkit'

import {
  addToHistory,
  getHistory,
  removeFromHistory,
} from '../middleware/thunk/historyThunk'
import { ValueWithId } from '../../shared/types/sharedType'

type State = {
  history: ValueWithId[]
  isLoading: boolean
}

const initialState: State = {
  history: [],
  isLoading: false,
}

export const historySlice = createSlice({
  name: 'HISTORY',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getHistory.fulfilled, (state, action) => {
        state.history = action.payload
      })

      .addCase(addToHistory.fulfilled, (state, action) => {
        state.history.push(action.payload)
        state.isLoading = false
      })
      .addCase(addToHistory.pending, state => {
        state.isLoading = true
      })

      .addCase(removeFromHistory.fulfilled, (state, action) => {
        state.history = state.history.filter(({ id }) => id !== action.payload)
        state.isLoading = false
      })
      .addCase(removeFromHistory.pending, state => {
        state.isLoading = true
      })
  },
})

export const historyReducer = historySlice.reducer
