import { RootState } from '../store'

export const valueSelect = (state: RootState) => state.searchReducer.value
