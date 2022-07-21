import { KnownTable } from './KnownTable';
import { HardTable } from './HardTable';

export const Stats = ({ paoData }) => {

	return (
		<div className="stats-layout">
			<KnownTable paoData={paoData} />
			<HardTable paoData={paoData} />
		</div>
	);
}
