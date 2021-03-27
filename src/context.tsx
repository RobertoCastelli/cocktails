import React, { ReactNode, createContext } from "react"

type Props = {
	children: ReactNode
}

export const DataContext = createContext({} as ContextValue)

export const ContextProvider = ({ children }: Props) => {
	const title: string = "cockTailS"

	const query = "margarita"
	const endpoint: string = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`

	const fetchData = async () => {
		const res = await fetch(endpoint)
		const data = await res.json()
		console.log(data)
	}

	return (
		<DataContext.Provider value={{ title, fetchData }}>
			{children}
		</DataContext.Provider>
	)
}
