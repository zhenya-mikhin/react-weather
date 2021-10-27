import React from 'react'
import { ReactNode, useState } from 'react'
import { Theme } from '../context/ThemeContext'
import { ThemeContext } from '../context/ThemeContext'
import { changeCssRootVariables } from '../model/ChangeCssRootvariables'
import { storage } from '../model/Storage'

interface Props {
	children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {
	const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

	changeCssRootVariables(theme)
	
	const changeTheme = (theme: Theme) => {
		storage.setItem('theme', theme)
		setTheme(theme)
		changeCssRootVariables(theme)
	}
	
	return <ThemeContext.Provider
				value={{theme, changeTheme}}
				{...props}
			>
				{children}
			</ThemeContext.Provider>
}