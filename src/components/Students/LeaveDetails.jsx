import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LeaveTable = ({ leaveDetails }) => {
    return (
        <TableContainer component={Paper} sx={{ height: '50%' }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Start Date</strong></TableCell>
                        <TableCell><strong>End Date</strong></TableCell>
                        <TableCell><strong>Reason</strong></TableCell>
                        <TableCell><strong>Type of Leave</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ overflow: 'scroll' }}>
                    {leaveDetails.map((leave) => (
                        <TableRow key={leave.id}>
                            <TableCell>{leave.startDate}</TableCell>
                            <TableCell>{leave.endDate}</TableCell>
                            <TableCell>{leave.reason}</TableCell>
                            <TableCell>{leave.leaveType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LeaveTable;