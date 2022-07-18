import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getRandomRangeArray, getRangeArray, zeroPad } from '../tools';
import { Button } from '@mui/material';
import { updateResult } from '../reducer';


export const TrainingRange = ({ paoData }) => {
	const min = useSelector(state => state.min);
	const max = useSelector(state => state.max);
	const isRandom = useSelector(state => state.isRandom);
	const propName = useSelector(state => state.propName);

	const [range, setRange] = useState(isRandom
		? getRandomRangeArray(min, max)
		: getRangeArray(min, max));
	return (
		<TrainingRangeElement
			range={range}
			propName={propName}
			paoData={paoData}
		/>
	)
};

export const TrainingRangeNewOnes = ({ paoData }) => {
	const min = useSelector(state => state.min);
	const max = useSelector(state => state.max);
	const isRandom = useSelector(state => state.isRandom);
	const propName = useSelector(state => state.propName);

	const newOnes = useSelector(state => state.results.person
		.map((item, index) => ({ ...item, index }))
		.filter(({ index }) => index >= min && index < max)
		.filter(({ ok, notOk }) => ok === 0 && notOk === 0))
		.map(({ index }) => index);

	const [range, setRange] = useState(isRandom
		? newOnes.sort(() => .5 - Math.random())
		: newOnes
	);
	return (
		<>
			{range.length > 0
				? (<TrainingRangeElement
					range={range}
					propName={propName}
					paoData={paoData}
				/>)
				: <div>no new ones in this range</div>
			}
		</>
	)
};


const TrainingRangeElement = ({ paoData, range, propName }) => {
	const dispatch = useDispatch();
	const [showAnswer, setShowAnswer] = useState(false);
	const [pos, setPos] = useState(0);
	const resultsArray = useSelector(state => state.results[propName]);

	const currentNumber = range[pos]

	const okAction = () => {
		dispatch(updateResult(propName, currentNumber, true));
		setShowAnswer(false);
		setPos(n => Math.min(n + 1, range.length - 1));
	};
	const notOkAction = () => {
		dispatch(updateResult(propName, currentNumber, false));
		setShowAnswer(false);
		setPos(n => Math.min(n + 1, range.length - 1));
	}
	const skip = () => {
		setShowAnswer(false);
		setPos(n => Math.min(n + 1, range.length - 1));
	}

	const { ok, notOk } = resultsArray[currentNumber];
	return (
		<div>
			<div>ok:{ok} notOk:{notOk} total:{ok + notOk}</div>
			<h1>{zeroPad(currentNumber, 2)}</h1>
			<Button onClick={() => setShowAnswer(n => !n)}> {showAnswer ? 'hide answer' : 'show answer'} </Button>
			{showAnswer &&
				<>
					<h3>{paoData[currentNumber][propName]}</h3>
					<Button disabled={pos >= range.length} onClick={okAction} color="success">ok</Button>
					<Button disabled={pos >= range.length} onClick={notOkAction} color="error">not ok</Button>
				</>
			}
			<Button disabled={pos >= range.length} onClick={skip} color="success">skip</Button>
			<Button onClick={() => dispatch({ type: 'setView', view: 'trainingView' })} variant="outlined">back</Button>
		</div>
	);
};

