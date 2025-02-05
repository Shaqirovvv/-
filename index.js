import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './Store'
import HomePage from './HomePage'

ReactDOM.render(
	<Provider store={store}>
		<HomePage />
	</Provider>,
	document.getElementById('root')
)
