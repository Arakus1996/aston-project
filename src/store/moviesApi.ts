import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = process.env.REACT_APP_API_MOVIES_KEY
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com' }),
  endpoints: build => ({
    getMovies: build.query({
      query: page => `?apikey=${API_KEY}&s=Car&page=${page}`,
    }),
    getMovieById: build.query({
      query: id => `?apikey=${API_KEY}&i=${id}`,
    }),
  }),
})

export const { useGetMovieByIdQuery, useGetMoviesQuery } = moviesApi
