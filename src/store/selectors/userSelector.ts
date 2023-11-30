import { RootState } from '../store'

export const emailSelect = (state: RootState) => state.userReducer.email
export const userErrorSelect = (state: RootState) => state.userReducer.error
export const isLodingUserSelect = (state: RootState) =>
  state.userReducer.isLoading
