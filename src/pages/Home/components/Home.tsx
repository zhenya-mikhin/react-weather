import React, { useEffect } from 'react'

import s from './Home.module.scss'
import { ThisDay } from './ThisDay/ThisDay'
import { ThisDayInfo } from './ThisDayInfo/ThisdayInfo'
import { Days } from './Days/Days'
import { useCustomeDispatch, useCustomeSelector } from '../../../hooks/store'
import { fetchCurrentweather } from '../../../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../../../store/selectors'

interface Props {
	
}

export const Home = (props: Props) => {
	const dispatch = useCustomeDispatch()

	const { weather } = useCustomeSelector(selectCurrentWeatherData)

	useEffect(() => {
		dispatch(fetchCurrentweather('Saint Petersburg'))
	}, [])

	return (
		<div className={s.home}>
			<div className={s.wrapper}>
				<ThisDay weather={weather} />
				<ThisDayInfo weather={weather} />
			</div>
			<Days />
		</div>
	)
}
