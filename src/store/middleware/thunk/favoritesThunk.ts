import { createAsyncThunk } from '@reduxjs/toolkit'

import { ShortDescriptionMovie } from '../../../shared/types/sharedType'
import { addToFB, getDataToFB, removeToFB } from '../../firebase/firebase'
import { fetchById } from '../../moviesApi'

export const getFavorites = createAsyncThunk<ShortDescriptionMovie[], string>(
  'FAVORITES/getFavorites',
  async email => {
    const favoriteData = []
    const favoriteIds = await getDataToFB(email, 'favorites')
    for (const id of favoriteIds) {
      favoriteData.push(await fetchById(id))
    }

    return favoriteData
  }
)

export const addFavoriteItem = createAsyncThunk<ShortDescriptionMovie, string>(
  'FAVORITES/addFavoriteItem',
  async id => {
    await addToFB(id, 'favorites')
    return await fetchById(id)
  }
)

export const removeFavoriteItem = createAsyncThunk<string, string>(
  'FAVORITES/removeFavoriteItem',
  async id => {
    await removeToFB(id, 'favorites')
    return id
  }
)
