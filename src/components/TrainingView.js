import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

export const TrainingView = ({ paoData }) => {
	const dispatch = useDispatch();
	const propNames = [
		'person',
		'description',
		'action',
		'object',
	];
	const ranges = [[0, 20], [20, 40], [40, 60], [60, 80], [80, 100], [0, 100]];

	return (
		<div>
			{propNames.map(name => (
				<div key={name}>
					<h3>{name}</h3>
					<h5>Ordered</h5>
					{ranges.map(([start, end]) => (
						<Button key={`ordered${name}${start}${end}`} onClick={() => dispatch({
							type: 'startTrainingNumbers',
							view: 'trainingNumbers',
							propName: name,
							min: start,
							max: end,
							isRandom: false
						})}>{start}-{end - 1}</Button>
					))}
					<h5>Random</h5>
					{ranges.map(([start, end]) => (
						<Button key={`ordered${name}${start}${end}`} onClick={() => dispatch({
							type: 'startTrainingNumbers',
							view: 'trainingNumbers',
							propName: name,
							min: start,
							max: end,
							isRandom: true
						})}>{start}-{end - 1}</Button>
					))}
					<h5>Neutral ones</h5>
					{ranges.map(([start, end]) => (
						<Button key={`neutral${name}${start}${end}`} onClick={() => dispatch({
							type: 'startTrainingNumbers',
							view: 'trainingNeutralOnes',
							propName: name,
							min: start,
							max: end,
							isRandom: true
						})}>{start}-{end - 1}</Button>
					))}
					<h5>Hard ones</h5>
					{ranges.map(([start, end]) => (
						<Button key={`hard${name}${start}${end}`} onClick={() => dispatch({
							type: 'startTrainingNumbers',
							view: 'trainingHardOnes',
							propName: name,
							min: start,
							max: end,
							isRandom: true
						})}>{start}-{end - 1}</Button>
					))}
				</div>
			))}
		</div>
	);
}
