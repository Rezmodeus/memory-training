import { getResults } from './tools';


export const initialState = {
	// view: 'paoTable',
	view: 'trainingView',
	propName: 'name',
	min: 0,
	max: 100,
	isRandom: false,
	results: {
		...getResults()
	},
}

