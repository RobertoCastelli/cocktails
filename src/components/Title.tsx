import React, { useContext } from "react"
import { DataContext } from "../context"

export const Title = () => {
	const { title } = useContext(DataContext)

	return (
		<div>
			<h1>{title}</h1>
		</div>
	)
}
