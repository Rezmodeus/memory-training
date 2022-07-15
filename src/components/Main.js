import { PaoTable } from './PaoTable';
import { useEffect, useReducer } from 'react';
import { reducer } from '../reducer';
import { paoData } from '../myPao';
import { ActionObjectTable } from './ActionObjectTable';
import { initialState } from '../constants';
import { saveResults } from '../tools';
import { ViewButtons } from './ViewButtons';


export const Main = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { results } = state;

	useEffect(() => {
		saveResults(results);
	}, [results])


	const { view } = state;
	return (
		<div>
			<ViewButtons dispatch={dispatch} />
			{view === 'paoTable' &&
				<PaoTable paoData={paoData} />
			}
			{view === 'actionObjectMapping' &&
				<ActionObjectTable paoData={paoData} />
			}
		</div>
	);
};

