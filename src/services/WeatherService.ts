import { Weather } from './../store/types'
import axios, { AxiosResponse } from 'axios'
import api from '../axios'

export class WeatherServise {
	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
		return api.get<Weather>(`/weather?q=${city}`)
	}
}