import { Button } from '@mui/material';
import { Training1 } from './Training1';

export const TrainingView = ({ paoData }) => {

	return (
		<div>
			<Button

			>
				description
			</Button>
			<Training1
				paoData={paoData}
				propName={'description'}
				list={[0,1]}
				okAction={() => console.log('ok')}
				notOkAction={() => console.log('not ok')}
			/>
		</div>
	);
};

