import React, { useState } from 'react'
import { connect } from 'react-redux'

const HomePage = ({ items, addItem }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = event => {
		setInputValue(event.target.value)
	}

	const handleAddClick = () => {
		if (inputValue.trim() !== '') {
			addItem(inputValue)
			setInputValue('')
		}
	}

	return (
		<div>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button onClick={handleAddClick}>add</button>
			<ul>
				{items.map((item) => (
					<h2>{item}</h2>
				))}
			</ul>
		</div>
	)
}



export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

