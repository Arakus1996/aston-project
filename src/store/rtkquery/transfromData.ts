import { ShortDescriptionMovie } from '../../shared/types/sharedType'

type Response = {
  Response: string
  Search: ShortDescriptionMovie[]
  totalResults: number
}

type TransformResponse = {
  Search: ShortDescriptionMovie[]
  totalResults: number
} | null

export const transformGetMoviesResponce = (
  response: Response
): TransformResponse => {
  if (response.Response === 'False') {
    return null
  }
  return {
    Search: response.Search,
    totalResults: response.totalResults,
  }
}
