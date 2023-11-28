import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { store } from '../store'
import { app, db } from '../../firebase'

import type { ValueWithId } from '../../shared/types/sharedType'

type Value = string | ValueWithId

const auth = getAuth(app)

export const initCollectionFB = async (email: string) => {
  await setDoc(doc(db, email, 'collections'), {
    favorites: [],
  })
}

export const createUserInFB = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  return userCredential.user.email
}
export const signInUserInFB = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user.email
}

export const signOutFromFB = async () => {
  return signOut(auth)
}

export const addToFB = async (value: Value, collection: string) => {
  const { userReducer } = store.getState()
  if (userReducer.email) {
    await updateDoc(doc(db, userReducer.email, 'collections'), {
      [collection]: arrayUnion(value),
    })
  }
}
export const removeToFB = async (value: Value, collection: string) => {
  const { userReducer } = store.getState()
  if (userReducer.email) {
    await updateDoc(doc(db, userReducer.email, 'collections'), {
      [collection]: arrayRemove(value),
    })
  }
}
export const getDataToFB = async (email: string | null, collection: string) => {
  if (email) {
    const favoritesSnap = await getDoc(doc(db, email, 'collections'))
    if (favoritesSnap.exists()) {
      const collections = favoritesSnap.data()
      return collections[collection]
    }
  }
}
