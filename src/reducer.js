const actions = {
	setView: (state, { view }) => ({
		...state,
		view
	}),
	randomizeOrder: (state) => {
		return {
			...state,
			currentList: state.currentList.sort(() => .5 - Math.random())
		}
	},
	sortOrder: (state) => {
		return {
			...state,
			currentList: state.currentList.sort((a, b) => a - b)
		}
	},
	startTraining1: (state, { propName, notOkOnly = false }) => {
		return {
			...state,
			view: 'training1',
			propName,
			notOkOnly
		}
	},
	okAction: (state, { index }) => {
		return {
			...state,
			currentList: state.currentList.filter(n => n !== index),
			results: {
				...state.results,
				[state.propName]: [
					...state.results[state.propName].slice(0, index),
					true,
					...state.results[state.propName].slice(index + 1),
				]
			}
		}
	},
	notOkAction: (state, { index }) => {
		return {
			...state,
			currentList: [
				...state.currentList.filter(n => n !== index),
				index
			],
			results: {
				...state.results,
				[state.propName]: [
					...state.results[state.propName].slice(0, index),
					false,
					...state.results[state.propName].slice(index + 1),
				]
			}
		}
	},
	skip: (state) => {
		const [first, ...rest] = state.currentList;
		return {
			...state,
			currentList: [
				...rest,
				first
			]
		}

	}


}

export const reducer = (state, action) => actions[action.type](state, action);

