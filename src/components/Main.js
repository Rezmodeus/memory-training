import { PaoTable } from './PaoTable';
import { useEffect, useReducer } from 'react';
import { reducer } from '../reducer';
import { paoData } from '../myPao';
import { ActionObjectTable } from './ActionObjectTable';
import { initialState } from '../constants';
import { saveResults } from '../tools';
import { ViewButtons } from './ViewButtons';
import { TrainingView } from './TrainingView';
import { Training1 } from './Training1';


export const Main = () => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { results, propName, currentList, notOkOnly } = state;

	useEffect(() => {
		saveResults(results);
	}, [results])


	const { view } = state;
	return (
		<div>
			<ViewButtons dispatch={dispatch} state={state} />
			{view === 'paoTable' &&
				<PaoTable paoData={paoData} />
			}
			{view === 'actionObjectMapping' &&
				<ActionObjectTable paoData={paoData} />
			}
			{view === 'trainingView' &&
				<TrainingView paoData={paoData} dispatch={dispatch} />
			}
			{view === 'training1' &&
				<Training1
					results={results}
					paoData={paoData}
					propName={propName}
					currentList={currentList}
					dispatch={dispatch}
					notOkOnly={notOkOnly}
				/>
			}
		</div>
	);
};

