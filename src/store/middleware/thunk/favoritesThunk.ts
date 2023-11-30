import { createAsyncThunk } from '@reduxjs/toolkit'

import { ShortDescriptionMovie } from '../../../types/sharedType'
import { addToDb, getDataToDb, removeToDb } from '../../firebase/firebase'
import { fetchById } from '../../rtkquery/moviesApi'
import { RootState } from '../../store'

export const getFavorites = createAsyncThunk<ShortDescriptionMovie[], string>(
  'FAVORITES/getFavorites',
  async email => {
    const favoriteData = []
    const favoriteIds = await getDataToDb(email, 'favorites')
    for (const id of favoriteIds) {
      favoriteData.push(await fetchById(id))
    }
    return favoriteData
  }
)

export const addFavoriteItem = createAsyncThunk<
  ShortDescriptionMovie,
  string,
  { state: RootState }
>('FAVORITES/addFavoriteItem', async (id, { getState }) => {
  const { userReducer } = getState()
  await addToDb(userReducer.email, id, 'favorites')
  return await fetchById(id)
})

export const removeFavoriteItem = createAsyncThunk<
  string,
  string,
  { state: RootState }
>('FAVORITES/removeFavoriteItem', async (id, { getState }) => {
  const { userReducer } = getState()
  await removeToDb(userReducer.email, id, 'favorites')
  return id
})
