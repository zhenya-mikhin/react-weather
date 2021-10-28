import { currentWeatherSlice } from './../slices/currentWeatherSlice'
import { WeatherServise } from './../../services/WeatherService'
import { AppDispatch } from './../store'

export const fetchCurrentweather = 
	(payload: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
			const res = await WeatherServise.getCurrentWeather(payload)
			if (res.status === 200) {
				dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
			} else {
				dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
			}
		} catch (error) {
			console.log(error)
		}
}