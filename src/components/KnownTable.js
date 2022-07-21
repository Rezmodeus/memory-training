import { useSelector } from 'react-redux';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { zeroPad } from '../tools';

export const KnownTable = ({ paoData }) => {
	const resultsPerson = useSelector(state => state.results.person);
	const names = paoData
		.map((item, index) => ({ ...item, index }))
		.filter((_, index) => {
			const { ok, notOk } = resultsPerson[index];
			return ok > notOk;
		})

	return (
		<div className="stats-table">
			<h3>known {names.length}</h3>
			<TableContainer component={Paper}>
				<Table sx={{ width: 400 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>name</TableCell>
							<TableCell>stats</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{names.map(({ person }, index) => (
							<TableRow
								key={person}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{zeroPad(index, 2)}
								</TableCell>
								<TableCell align="left">{person}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

