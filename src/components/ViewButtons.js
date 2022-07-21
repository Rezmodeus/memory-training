import { Button, ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const ViewButtons = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);
	return (
		<div>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button onClick={() => dispatch({ type: 'setView', view: 'paoTable' })}>pao table</Button>
				<Button onClick={() => dispatch({ type: 'setView', view: 'actionObjectMapping' })}
				>
					action object
				</Button>
				<Button onClick={() => dispatch({ type: 'setView', view: 'trainingView' })}>training</Button>
				<Button onClick={() => dispatch({ type: 'setView', view: 'stats' })}>stats</Button>
				<Button color="secondary" onClick={() => console.log('state', state)}>dumpState</Button>
			</ButtonGroup>
		</div>
	);
};

