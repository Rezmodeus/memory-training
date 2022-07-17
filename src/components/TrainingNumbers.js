import { zeroPad } from '../tools';
import { useState } from 'react';
import { Button } from '@mui/material';


export const TrainingNumbers = ({ paoData, propName, currentList, isRandom, notOkOnly, dispatch, results }) => {
	const [showProp, setShowProp] = useState(false);
	const list = notOkOnly
		? currentList.filter(n => !results[propName][n])
		: currentList;

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
			<div>{list.length}</div>
			<Button onClick={skip} color="success">skip</Button>

		</div>
	);
};

