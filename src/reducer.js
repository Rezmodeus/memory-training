const actions = {
	setView: (state, { view }) => ({
		...state,
		view
	}),
	updateResult: (state, { propName, index, value }) => {
		return {
			...state,
			results: {
				...state.results,
				[propName]: [
					...state.results[propName].slice(0, index),
					value,
					...state.results[propName].slice(index + 1),
				]
			}
		}
	}
}

export const reducer = (state, action) => actions[action.type](state, action);

