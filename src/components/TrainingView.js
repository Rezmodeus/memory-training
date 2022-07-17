import { Button } from '@mui/material';

export const TrainingView = ({ paoData, dispatch }) => {

	return (
		<div>
			<Button onClick={() => dispatch({ type: 'randomizeOrder' })}>
				randomize order
			</Button>
			<Button onClick={() => dispatch({ type: 'sortOrder' })}>
				sort order
			</Button>

			<div>
				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'description'
				})}> description </Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'description',
					notOkOnly: true
				})}> description notOk </Button>

			</div>
			<div>
				<h3>Person</h3>
				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person'
				})}> person </Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					notOkOnly: true
				})}> person notOk </Button>
			</div>
			<div>
				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					currentMin: 0,
					currentMax:20
				})}>0-19</Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					currentMin: 20,
					currentMax:40
				})}>20-39</Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					currentMin: 40,
					currentMax:60
				})}>40-59</Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					currentMin: 60,
					currentMax: 80
				})}>60-79</Button>

				<Button onClick={() => dispatch({
					type: 'startTrainingNumbers',
					propName: 'person',
					currentMin: 80,
					currentMax: 100
				})}>80-99</Button>


			</div>
		</div>
	);
};

