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
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { auth, db } from '../../app/firebase'

import type { ValueWithId } from '../../types/sharedType'

type Value = string | ValueWithId

export const initCollectionDb = async (email: string) => {
  await setDoc(doc(db, email, 'collections'), {
    favorites: [],
  })
}

export const createUserInDb = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  return userCredential.user.email
}
export const signInUserInDb = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user.email
}

export const signOutFromDb = async () => {
  return signOut(auth)
}

export const addToDb = async (
  email: string | null,
  value: Value,
  collection: string
) => {
  if (email) {
    await updateDoc(doc(db, email, 'collections'), {
      [collection]: arrayUnion(value),
    })
  }
}

export const removeToDb = async (
  email: string | null,
  value: Value,
  collection: string
) => {
  if (email) {
    await updateDoc(doc(db, email, 'collections'), {
      [collection]: arrayRemove(value),
    })
  }
}
export const getDataToDb = async (email: string | null, collection: string) => {
  if (email) {
    const favoritesSnap = await getDoc(doc(db, email, 'collections'))
    if (favoritesSnap.exists()) {
      const collections = favoritesSnap.data()
      return collections[collection]
    }
  }
}
