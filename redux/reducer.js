const initialState = {
	items: JSON.parse(localStorage.getItem('items')) || [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const newItems = [...state.items, action.payload]
			localStorage.setItem('items', JSON.stringify(newItems))
			return {
				...state,
				items: newItems,
			}
		default:
			return state
	}
}

export default reducer

// import { createAction, createReducer } from '@reduxjs/toolkit';

// const intitialState = {
//     num: 0,
//     text: 'Hello World!',
// }

// export const incrementNum = createAction('INCREMENT_NUM');
// export const decrementNum = createAction("DECREMENT_NUM");
// export const resetNum = createAction('RESET_NUM');
// export const setText = createAction('SET_TEXT');

// export default createReducer(intitialState, (builder) => {
//     builder
//         .addCase('INCREMENT_NUM', (state, action) => {
//             if(state.num < 20){
//                 state.num = state.num + 1
//             } else {
//                 state.num = 20
//             }
//         })
//         .addCase('DECREMENT_NUM', (state, action) => {
//             if (state.num > 0) {
//                 state.num = state.num - 1
//             } else {
//                 state.num = 0
//             }
//         })
//         .addCase('RESET_NUM', (state, action)=>{
//             state.num = 0
//         })
//         .addCase("SET_TEXT", (state, action)=>{
//             state.text = action.payload
//         })
// })
