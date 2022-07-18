import { PaoTable } from './PaoTable';
import { paoData } from '../myPao';
import { ActionObjectTable } from './ActionObjectTable';
import { ViewButtons } from './ViewButtons';
import { TrainingView } from './TrainingView';
import { useSelector } from 'react-redux';
import { TrainingRange, TrainingRangeNewOnes } from './TrainingRange';


export const Main = () => {
	const view = useSelector(state => state.view);

	return (
		<div>
			<ViewButtons />
			{view === 'paoTable' &&
				<PaoTable paoData={paoData} />
			}
			{view === 'actionObjectMapping' &&
				<ActionObjectTable paoData={paoData} />
			}
			{view === 'trainingView' &&
				<TrainingView paoData={paoData} />
			}
			{view === 'trainingNumbers' &&
				<TrainingRange paoData={paoData} />
			}
			{view === 'trainingNewOnes' &&
				<TrainingRangeNewOnes paoData={paoData} />
			}
		</div>
	);
};

