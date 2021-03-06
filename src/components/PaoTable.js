import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { zeroPad } from '../tools';

export const PaoTable = ({ paoData }) => {
	const names = paoData.filter(({ person }) => person).length;
	const completeEntries = paoData.filter(({ person, action, object }) => person && action && object).length;
	return (
		<>
			<h3>names:{names}</h3>
			<h3>complete:{completeEntries}</h3>
			<TableContainer component={Paper}>
				<Table sx={{ width: 400 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{Object.keys(paoData[0])
								.map(key => <TableCell key={key}>{key}</TableCell>)
							}
						</TableRow>
					</TableHead>
					<TableBody>
						{paoData.map(({ string, person, action, object, description }, index) => (
							<TableRow
								key={string}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{zeroPad(index, 2)}
								</TableCell>
								<TableCell align="left">{string}</TableCell>
								<TableCell align="left">{person}</TableCell>
								<TableCell align="left">{action}</TableCell>
								<TableCell align="left">{object}</TableCell>
								<TableCell align="left">{description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

