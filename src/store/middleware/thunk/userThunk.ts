import { getAuth, signOut } from 'firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch } from '../../store'
import { toggleLoading } from '../../slices/userSlice'
import {
  createUserInFB,
  initCollectionFB,
  signInUserInFB,
} from '../../firebase/firebase'

import { getFavorites } from './favoritesThunk'

type RegisterData = {
  email: string
  password: string
}

export const createUser = createAsyncThunk(
  'USER/createUser',
  async ({ email, password }: RegisterData) => {
    const emailDB = await createUserInFB(email, password)
    if (emailDB) {
      initCollectionFB(emailDB)
      return emailDB
    }
  }
)

export const signInUser = createAsyncThunk<
  string,
  RegisterData,
  { dispatch: AppDispatch }
>('USER/signInUser', async ({ email, password }, { dispatch }) => {
  dispatch(toggleLoading(true))
  const emailDB = await signInUserInFB(email, password)
  if (emailDB) {
    dispatch(getFavorites(emailDB))
    return emailDB
  } else {
    throw new Error('email error')
  }
})

export const signOutUser = createAsyncThunk<string, void>(
  'USER/signOutUser',
  async () => {
    const auth = getAuth()
    await signOut(auth)
    return ''
  }
)
