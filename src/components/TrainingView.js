import { Button } from '@mui/material';

export const TrainingView = ({ paoData, dispatch }) => {

	return (
		<div>
			<Button
				onClick={() => dispatch({ type: 'randomizeOrder' })}
			>
				randomize order
			</Button>
			<Button
				onClick={() => dispatch({ type: 'sortOrder' })}
			>
				sort order
			</Button>

			<div>
				<Button
					onClick={() => dispatch({ type: 'startTrainingNumbers', propName: 'description' })}
				>
					description
				</Button>
				<Button
					onClick={() => dispatch({ type: 'startTrainingNumbers', propName: 'description', notOkOnly: true })}
				>
					description notOk
				</Button>

			</div>
			<div>
				<Button
					onClick={() => dispatch({ type: 'startTrainingNumbers', propName: 'person' })}
				>
					person
				</Button>
				<Button
					onClick={() => dispatch({ type: 'startTrainingNumbers', propName: 'person', notOkOnly: true })}
				>
					person notOk
				</Button>

			</div>
		</div>
	);
};

