import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export const TrainingView = ({ paoData }) => {
	const dispatch = useDispatch();
	const ranges = [[0, 20], [20, 40], [40, 60], [60, 80], [80, 100], [0, 100]];

	return (
		<div>
			<h3>Person</h3>
			<h4>Ordered</h4>
			{ranges.map(([start, end]) => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNumbers',
					propName: 'person',
					min: start,
					max: end,
					isRandom: false
				})}>{start}-{end - 1}</Button>
			))}
			<h4>Random</h4>
			{ranges.map(([start, end]) => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNumbers',
					propName: 'person',
					min: start,
					max: end,
					isRandom: true
				})}>{start}-{end - 1}</Button>
			))}
			<h4>Neutral ones</h4>
			{ranges.map(([start, end]) => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNeutralOnes',
					propName: 'person',
					min: start,
					max: end,
					isRandom: false
				})}>{start}-{end - 1}</Button>
			))}
			<h4>Hard ones</h4>
			{ranges.map(([start, end]) => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingHardOnes',
					propName: 'person',
					min: start,
					max: end,
					isRandom: false
				})}>{start}-{end - 1}</Button>
			))}
		</div>
	);
}
