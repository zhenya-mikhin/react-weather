import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	currentWeatherSliceReducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false
	})
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']