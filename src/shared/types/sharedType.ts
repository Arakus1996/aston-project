import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export type InputEvent = React.ChangeEvent<HTMLInputElement>

export type InputType = {
  register: UseFormRegister<FieldValues>
  error: FieldValues | undefined
  typeValidation: string
  setValue?: (value: string) => void
  validation?: RegisterOptions<FieldValues>
  placeholder?: string
  inputType?: string
  value?: string
  handleOnChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ShortDescriptionMovie {
  imdbID: string
  Title: string
  Poster: string
  Year: string
  Type: string
}

export interface FullDescriptionMovie extends ShortDescriptionMovie {
  Genre: string
  Country: string
  Year: string
  Runtime: string
  Director: string
  Actors: string
  Writer: string
  Released: string
  Rated: string
  Plot: string
  imdbRating: string
}

export interface MoviesResponce {
  Response: boolean
  Search: ShortDescriptionMovie[]
  totalResults: string
}
