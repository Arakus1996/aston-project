import { createAsyncThunk } from '@reduxjs/toolkit'

import { ValueWithId } from '../../../types/sharedType'
import { addToDb, getDataToDb, removeToDb } from '../../firebase/firebase'
import { RootState } from '../../store'

type ID = string | number

export const getHistory = createAsyncThunk<ValueWithId[], string>(
  'HISTORY/getHistory',
  async email => {
    const historyData = await getDataToDb(email, 'history')
    if (historyData) {
      return historyData
    }
    return []
  }
)

export const addToHistory = createAsyncThunk<
  ValueWithId,
  ValueWithId,
  { state: RootState }
>('HISTORY/addToHistory', async (historyItem, { getState }) => {
  const { userReducer } = getState()
  await addToDb(userReducer.email, historyItem, 'history')
  return historyItem
})

export const removeFromHistory = createAsyncThunk<
  ID,
  ValueWithId,
  { state: RootState }
>('HISTORY/removeFromHistory', async (historyItem, { getState }) => {
  const { userReducer } = getState()
  await removeToDb(userReducer.email, historyItem, 'history')
  return historyItem.id
})
