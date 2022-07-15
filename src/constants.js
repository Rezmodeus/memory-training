import { getIndexArray, getResults } from './tools';


export const initialState = {
	// view: 'paoTable',
	view: 'actionObjectMapping',
	currentList: getIndexArray(100),
	results: {
		...getResults()
	},
}

