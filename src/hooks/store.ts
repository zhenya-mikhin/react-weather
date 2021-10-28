import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './../store/store'

export const useCustomeDispatch = () => useDispatch<AppDispatch>()
export const useCustomeSelector: TypedUseSelectorHook<RootState> = useSelector