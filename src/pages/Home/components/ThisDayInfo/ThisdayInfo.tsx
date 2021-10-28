import React from 'react'
import cloud from '../../../../assets/images/cloud.png'
import { Weather } from '../../../../store/types'
import s from './ThisDayInfo.module.scss'
import { ThisDayItem } from './ThisDayItem'

interface Props {
	weather: Weather
}

export interface Item {
	icon_id: string,
	name: string,
	value: string,
}

export const ThisDayInfo = ({ weather }: Props) => {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`,
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: `${weather.main.pressure} мм ртутного столба - нормальное`,
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: `${weather.wind.speed} м/с юго-запад - легкий ветер`,
		},
	]
	
	return (
		<div className={s.this__day_info}>
			<div className={s.this__day_info_items}>
				{items.map((item: Item) => (
					<ThisDayItem key={item.icon_id} item={item} />
				))}
			</div>
			<img className={s.cloud__img} src={cloud} alt="облако"/>
		</div>
	)
}
