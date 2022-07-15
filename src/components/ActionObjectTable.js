import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { zeroPad } from '../tools';
import { useState } from 'react';
import { Button } from '@mui/material';

export const ActionObjectTable = ({ paoData }) => {
	const [refresh, setRefresh] = useState(0);
	const headers = ['Index', 'Action', 'Object'];
	const lines = paoData.map(({ action, object }, index) => ({ index: zeroPad(index, 2), action, object }));
	return (
		<>
			<h3>Action object mapping</h3>
			<Button onClick={() => setRefresh(n => n + 1)} variant="contained">Randomize</Button>
			<TableContainer component={Paper} key={refresh}>
				<Table sx={{ width: 400 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{headers
								.map(key => <TableCell key={key}>{key}</TableCell>)
							}
						</TableRow>
					</TableHead>
					<TableBody>
						{paoData.map(({ action, object }, index) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{zeroPad(index, 2)}
								</TableCell>
								<TableCell align="left">{action}</TableCell>
								<TableCell align="left">{paoData[Math.floor(Math.random() * 100)].object}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
