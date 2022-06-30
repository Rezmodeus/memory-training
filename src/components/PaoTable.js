import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { paoData } from '../paoData';

export const PaoTable = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{Object.keys(paoData[0])
							.map(key => <TableCell key={key}>{key}</TableCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{paoData.map(({ string, person, action, object }) => (
						<TableRow
							key={string}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{string}
							</TableCell>
							<TableCell align="right">{person}</TableCell>
							<TableCell align="right">{action}</TableCell>
							<TableCell align="right">{object}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

