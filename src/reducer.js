import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { saveResults } from './tools';

const actions = {
	setView: (state, { view }) => ({
		...state,
		view
	}),
	startTrainingNumbers: (state, { view, propName, min = 0, max = 100, isRandom = false }) => {
		return {
			...state,
			view,
			propName,
			min,
			max,
			isRandom
		}
	},
	updateResults: (state, { results }) => ({
		...state,
		results
	})


}

// action creators
export const updateResult = (propName, index, value) => (dispatch, getState) => {
	const results = getState().results;
	const currentResult = results[propName][index];
	const newResults = {
		...results,
		[propName]: [
			...results[propName].slice(0, index),
			{
				ok: currentResult.ok + (value ? 1 : 0),
				notOk: currentResult.notOk + (value ? 0 : 1),
			},
			...results[propName].slice(index + 1),

		]
	};
	saveResults(newResults);
	dispatch({ type: 'updateResults', results: newResults })
}


export const reducer = (state, action) => actions?.[action.type]?.(state, action) ?? state;

const middlewares = [
	thunk,
];

export const getCustomStore = (customState) =>
	createStore(reducer, customState, applyMiddleware(...middlewares));

