import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'
import s from './Days.module.scss'

interface Props {
	day: Day
}

export const Card = ({ day }: Props) => {
	const { day_of_week, day_info, icon_id, temp_day, temp_night, info } = day
	
	return (
		<div className={s.card}>
			<div className={s.day}>{day_of_week}</div>
			<div className={s.day__info}>{day_info}</div>
			<div className={s.day__img}>
				<GlobalSvgSelector id={icon_id} />
			</div>
			<div className={s.temp__day}>{temp_day}</div>
			<div className={s.temp__night}>{temp_night}</div>
			<div className={s.info}>{info}</div>
		</div>
	)
}