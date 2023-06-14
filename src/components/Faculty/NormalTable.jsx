import React from 'react';
import { makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        border: '1px solid black',
        maxHeight: 'calc(100vh - 12rem)',
        overflowY: 'auto',
    },
});

const FacultyTable = ({ faculties }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table stickyHeader className={classes.table} aria-label="Faculty Table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>ID</strong></TableCell>
                        <TableCell><strong>Name</strong></TableCell>
                        <TableCell><strong>Department</strong></TableCell>
                        <TableCell><strong>Designation</strong></TableCell>
                        <TableCell><strong>Date of Joining</strong></TableCell>
                        <TableCell><strong>Experience</strong></TableCell>
                        <TableCell><strong>Subject</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {faculties.map((faculty) => (
                        <TableRow key={faculty.id}>
                            <TableCell>{faculty.id}</TableCell>
                            <TableCell>{faculty.name}</TableCell>
                            <TableCell>{faculty.department}</TableCell>
                            <TableCell>{faculty.designation}</TableCell>
                            <TableCell>{faculty.doj}</TableCell>
                            <TableCell sx={{textAlign: 'center'}}>{faculty.experience}</TableCell>
                            <TableCell>{faculty.subject}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FacultyTable;