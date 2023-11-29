import { createAsyncThunk } from '@reduxjs/toolkit'

import { ShortDescriptionMovie } from '../../../types/sharedType'
import { addToDb, getDataToDb, removeToDb } from '../../firebase/firebase'
import { fetchById } from '../../rtkquery/moviesApi'

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

export const addFavoriteItem = createAsyncThunk<ShortDescriptionMovie, string>(
  'FAVORITES/addFavoriteItem',
  async id => {
    await addToDb(id, 'favorites')
    return await fetchById(id)
  }
)

export const removeFavoriteItem = createAsyncThunk<string, string>(
  'FAVORITES/removeFavoriteItem',
  async id => {
    await removeToDb(id, 'favorites')
    return id
  }
)
