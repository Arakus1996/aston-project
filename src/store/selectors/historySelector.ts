import { RootState } from '../store'

export const historySelect = (state: RootState) => state.historyReducer.history
export const isLodingHistorySelect = (state: RootState) =>
  state.historyReducer.isLoading
