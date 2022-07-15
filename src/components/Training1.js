import { zeroPad } from '../tools';
import { useState } from 'react';
import { Button } from '@mui/material';

export const Training1 = ({ paoData, propName, list, okAction, notOkAction }) => {
	const [showProp, setShowProp] = useState(false);

	const nbr = list[0];
	const nbrStr = zeroPad(nbr, 2);

	return (
		<div>
			<h2>{nbrStr}</h2>
		<Button onClick={() => setShowProp(n => !n)}>
				{showProp ? 'hide answer' : 'show answer'}
			</Button>
			<Button color="success">ok</Button>
			<Button color="error">not ok</Button>
			{showProp &&
				<h3>{paoData[nbr][propName]}</h3>
			}

		</div>
	);
};

