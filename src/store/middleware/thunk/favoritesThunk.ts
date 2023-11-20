import { createAsyncThunk } from '@reduxjs/toolkit'
import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'

import { ShortDescriptionMovie } from '../../../shared/types/sharedType'
import { db } from '../../../firebase'

export const getFavorites = createAsyncThunk<ShortDescriptionMovie[]>(
  'FAVORITES/getFavorites',
  async function () {
    const favoritesCol = collection(db, 'favorites')
    const favoritesSnapshot = await getDocs(favoritesCol)
    const favoriteMovies = favoritesSnapshot.docs.map(doc => doc.data())
    const favoriteMoviesResult1 = JSON.stringify(favoriteMovies)
    const favoriteMoviesResult = JSON.parse(favoriteMoviesResult1) ///Поправить
    return favoriteMoviesResult
  }
)

export const addFavoriteItem = createAsyncThunk<
  ShortDescriptionMovie,
  ShortDescriptionMovie
>('FAVORITES/addFavoriteItem', async movieData => {
  await setDoc(doc(db, 'favorites', movieData.imdbID), { ...movieData })
  return movieData
})

export const removeFavoriteItem = createAsyncThunk<string, string>(
  'FAVORITES/removeFavoriteItem',
  async imdbID => {
    await deleteDoc(doc(db, 'favorites', imdbID))
    return imdbID
  }
)
