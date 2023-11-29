import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  createUserInFB,
  initCollectionFB,
  signInUserInFB,
} from '../../firebase/firebase'
import { app } from '../../../firebase'
import { setAuthUser, setLoading } from '../../slices/userSlice'

import { getFavorites } from './favoritesThunk'
import { getHistory } from './historyThunk'

type RegisterData = {
  email: string
  password: string
}

const auth = getAuth(app)

export const createUser = createAsyncThunk(
  'USER/createUser',
  async ({ email, password }: RegisterData) => {
    const emailDB = await createUserInFB(email, password)
    if (emailDB) {
      await initCollectionFB(emailDB)
      return emailDB
    } else {
      return null
    }
  }
)

export const signInUser = createAsyncThunk<string, RegisterData>(
  'USER/signInUser',
  async ({ email, password }) => {
    const emailDB = await signInUserInFB(email, password)
    if (emailDB) {
      return emailDB
    } else {
      throw new Error('email error')
    }
  }
)

export const signOutUser = createAsyncThunk<string | null, void>(
  'USER/signOutUser',
  async () => {
    await signOut(auth)
    return null
  }
)

export const checkAuth = createAsyncThunk<void, void>(
  'USER/checkAuth',
  (_, { dispatch }) => {
    onAuthStateChanged(auth, async user => {
      if (user && user.email) {
        await dispatch(getUserData(user.email))
      } else {
        dispatch(setAuthUser(null))
        dispatch(setLoading(false))
      }
    })
  }
)
export const getUserData = createAsyncThunk<void, string>(
  'USER/getUserData',
  async (email, { dispatch }) => {
    await dispatch(getFavorites(email))
    await dispatch(getHistory(email))
    dispatch(setAuthUser(email))
  }
)
