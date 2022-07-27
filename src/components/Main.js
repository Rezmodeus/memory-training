import { PaoTable } from './PaoTable';
import { ActionObjectTable } from './ActionObjectTable';
import { ViewButtons } from './ViewButtons';
import { TrainingView } from './TrainingView';
import { useSelector } from 'react-redux';
import { TrainingRange, TrainingRangeHardOnes, TrainingRangeNeutralOnes } from './TrainingRange';
import { Stats } from './Stats';
import { paoDataRaw } from '../paoData';
import { getPaoData } from '../tools';
// import { paoData } from '../myPao';
const paoData = getPaoData(paoDataRaw);


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
			{view === 'stats' &&
				<Stats paoData={paoData} />
			}
			{view === 'trainingNumbers' &&
				<TrainingRange paoData={paoData} />
			}
			{view === 'trainingNeutralOnes' &&
				<TrainingRangeNeutralOnes paoData={paoData} />
			}
			{view === 'trainingHardOnes' &&
				<TrainingRangeHardOnes paoData={paoData} />
			}

		</div>
	);
};

