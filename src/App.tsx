import React from "react"
import { Footer } from "./components/Footer"
import { Panel } from "./components/Panel"
import { Title } from "./components/Title"

function App() {
	return (
		<div className='container'>
			<div className='content'>
				<Title />
				<Panel />
			</div>
			<Footer />
		</div>
	)
}

export default App
