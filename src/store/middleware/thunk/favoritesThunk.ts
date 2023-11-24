import { createAsyncThunk } from '@reduxjs/toolkit'

import { FullDescriptionMovie } from '../../../shared/types/sharedType'
import { AppDispatch } from '../../store'
import { toggleLoading } from '../../slices/userSlice'
import { addToFB, getDataToFB, removeToFB } from '../../firebase/firebase'
import { fetchById } from '../../moviesApi'

export const getFavorites = createAsyncThunk<
  FullDescriptionMovie[],
  string,
  { dispatch: AppDispatch }
>('FAVORITES/getFavorites', async (email, { dispatch }) => {
  const favoriteData = []
  const favoriteIds = await getDataToFB(email)
  for (const id of favoriteIds) {
    favoriteData.push(await fetchById(id))
  }
  dispatch(toggleLoading(false))
  return favoriteData
})

export const addFavoriteItem = createAsyncThunk<FullDescriptionMovie, string>(
  'FAVORITES/addFavoriteItem',
  async id => {
    await addToFB(id)
    return await fetchById(id)
  }
)

export const removeFavoriteItem = createAsyncThunk<string, string>(
  'FAVORITES/removeFavoriteItem',
  async id => {
    await removeToFB(id)
    return id
  }
)
