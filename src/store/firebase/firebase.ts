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
} from 'firebase/auth'

import { store } from '../store'
import { db } from '../../firebase'

export const initCollectionFB = async (email: string) => {
  await setDoc(doc(db, email, 'collections'), {
    favorites: [],
  })
}

export const createUserInFB = async (email: string, password: string) => {
  const auth = getAuth()
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  return userCredential.user.email
}
export const signInUserInFB = async (email: string, password: string) => {
  const auth = getAuth()
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user.email
}

export const addToFB = async (id: string) => {
  const { userReducer } = store.getState()
  if (userReducer.email) {
    await updateDoc(doc(db, userReducer.email, 'collections'), {
      favorites: arrayUnion(id),
    })
  }
}
export const removeToFB = async (id: string) => {
  const { userReducer } = store.getState()
  if (userReducer.email) {
    await updateDoc(doc(db, userReducer.email, 'collections'), {
      favorites: arrayRemove(id),
    })
  }
}
export const getDataToFB = async (email: string) => {
  if (email) {
    const favoritesSnap = await getDoc(doc(db, email, 'collections'))
    if (favoritesSnap.exists()) {
      const { favorites } = favoritesSnap.data()
      return favorites
    }
  }
}
