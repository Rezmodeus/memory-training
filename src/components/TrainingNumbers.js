import { zeroPad } from '../tools';
import { useState } from 'react';
import { Button } from '@mui/material';


export const TrainingNumbers = (props) => {
	const {
		paoData,
		propName,
		currentList,
		notOkOnly,
		dispatch,
		results,
		currentMin = 0,
		currentMax = 100,
	} = props;
	const [showProp, setShowProp] = useState(false);
	const list = notOkOnly
		? currentList.slice(currentMin, currentMax).filter(n => !results[propName][n])
		: currentList.slice(currentMin, currentMax);

	const nbr = list[0];
	const nbrStr = zeroPad(nbr, 2);

	const okAction = () => {
		setShowProp(false);
		dispatch({ type: 'okAction', index: nbr })
	}
	const notOkAction = () => {
		setShowProp(false);
		dispatch({ type: 'notOkAction', index: nbr })
	}
	const skip = () => {
		setShowProp(false);
		dispatch({ type: 'skip' })
	}

	return (
		<div>
			<h1>{nbrStr}</h1>
			<Button onClick={() => setShowProp(n => !n)}>
				{showProp ? 'hide answer' : 'show answer'}
			</Button>
			<Button onClick={okAction} color="success">ok</Button>
			<Button onClick={notOkAction} color="error">not ok</Button>
			{showProp &&
				<h3>{paoData[nbr][propName]}</h3>
			}
			<div>{list.filter(n => !results[propName][n]).length}</div>
			<Button onClick={skip} color="success">skip</Button>

		</div>
	);
};

