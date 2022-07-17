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
	startTrainingNumbers: (state, { propName, notOkOnly = false, currentMin = 0, currentMax = 100 }) => {
		return {
			...state,
			view: 'trainingNumbers',
			propName,
			notOkOnly,
			currentMin,
			currentMax
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

