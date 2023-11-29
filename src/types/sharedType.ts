import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export type InputEvent = React.ChangeEvent<HTMLInputElement>

export type InputType = {
  register: UseFormRegister<FieldValues>
  error?: FieldValues
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

export interface FullDescriptionMovie {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string

  Actors?: string
  Genre?: string
  Country?: string
  Runtime?: string
  Director?: string
  Writer?: string
  Released?: string
  imdbRating?: string
  imdbVotes?: string
  Plot?: string
  Rated?: string
  Awards?: string
  Language?: string
  Metascore?: string
  Ratings?: string
  Response?: string
  totalSeasons?: string
}

export type ValueWithId = {
  value: string
  id: number
}
