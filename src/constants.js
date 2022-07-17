import { getIndexArray, getResults } from './tools';


export const initialState = {
	// view: 'paoTable',
	view: 'trainingView',
	propName: 'name',
	notOkOnly: false,
	currentList: getIndexArray(100),
	currentMin:0,
	currentMax:100,
	results: {
		...getResults()
	},
}

