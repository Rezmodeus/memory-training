import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export const TrainingView = ({ paoData }) => {
	const dispatch = useDispatch();
	const ranges = [0, 20, 40, 60, 80]

	return (
		<div>
			<h3>Person</h3>
			<h4>Ordered</h4>
			{ranges.map(start => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNumbers',
					propName: 'person',
					min: start,
					max: start + 20,
					isRandom: false
				})}>{start}-{start + 19}</Button>
			))}
			<h4>Random</h4>
			{ranges.map(start => (
				<Button key={'random' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNumbers',
					propName: 'person',
					min: start,
					max: start + 20,
					isRandom: true
				})}>{start}-{start + 19}</Button>
			))}
			<h4>New ones</h4>
			{ranges.map(start => (
				<Button key={'ordered' + start} onClick={() => dispatch({
					type: 'startTrainingNumbers',
					view: 'trainingNewOnes',
					propName: 'person',
					min: start,
					max: start + 20,
					isRandom: false
				})}>{start}-{start + 19}</Button>
			))}
		</div>
	);
}
