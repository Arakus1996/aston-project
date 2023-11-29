import { createAsyncThunk } from '@reduxjs/toolkit'

import { ValueWithId } from '../../../types/sharedType'
import { addToDb, getDataToDb, removeToDb } from '../../firebase/firebase'

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

export const addToHistory = createAsyncThunk<ValueWithId, ValueWithId>(
  'HISTORY/addToHistory',
  async historyItem => {
    await addToDb(historyItem, 'history')
    return historyItem
  }
)

export const removeFromHistory = createAsyncThunk<ID, ValueWithId>(
  'HISTORY/removeFromHistory',
  async historyItem => {
    await removeToDb(historyItem, 'history')
    return historyItem.id
  }
)
