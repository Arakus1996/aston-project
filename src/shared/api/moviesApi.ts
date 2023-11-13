import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_KEY = process.env.REACT_APP_API_KEY
const moviesApi = axios.create({
  baseURL: `https://www.omdbapi.com`,
  headers: {
    accept: 'application/json',
  },
})

export const getMovies = createAsyncThunk(
  'MOVIES_ACTION/getMovies',
  async function () {
    const responce = await moviesApi.get(`?apikey=${API_KEY}&s=Car&page=2`)
    return responce.data
  }
)
