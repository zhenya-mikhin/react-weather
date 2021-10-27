import React from 'react'
import { Card } from './Card'
import s from './Days.module.scss'

interface Props {
	
}

export const Tabs = (props: Props) => {
	const tabs = [
		{
			value: 'На неделю'
		},
		{
			value: 'На месяц'
		},
		{
			value: 'На 10 дней'
		}
	]

	return (
		<div className={s.tabs}>
			<div className={s.tabs__wrapper}>
				{tabs.map(tab => (
					<div className={s.tab} key={tab.value}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Отменить</div>
		</div>
	)
}