import React, { useContext } from "react"
import { DataContext } from "../context"

export const Panel = () => {
	const { fetchData } = useContext(DataContext)

	return (
		<div>
			<form>
				<input type='text' placeholder='search cocktail' />
				<button type='button' onClick={() => fetchData()}>
					search
				</button>
			</form>
		</div>
	)
}
