import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableComponent = ({ faculties }) => {
    const groupFacultiesByDepartment = () => {
        const groupedData = {};
        faculties.forEach((faculty) => {
            const department = faculty.department;
            if (!groupedData[department]) {
                groupedData[department] = [];
            }
            groupedData[department].push(faculty);
        });
        return groupedData;
    };

    const renderTable = (faculties) => (
        <TableContainer style={{ maxHeight: 'calc(100vh - 81px)' }}>
            <Table stickyHeader>
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
                            <TableCell sx={{ textAlign: 'center' }}>{faculty.experience}</TableCell>
                            <TableCell>{faculty.subject}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

    const renderDepartmentTreeItems = () => {
        const groupedData = groupFacultiesByDepartment();
        return Object.entries(groupedData).map(([department, faculties]) => (
            <TreeItem key={department} nodeId={department} label={department} sx={{ marginBottom: '0.5rem' }}>
                {renderTable(faculties)}
            </TreeItem>
        ));
    };

    return (
        <TreeView
            sx={{ border: '1px solid black', height: '100%', overflow: 'auto' }}
            defaultCollapseIcon={<ChevronRightIcon />}
            defaultExpandIcon={<ExpandMoreIcon />}
        >
            {renderDepartmentTreeItems()}
        </TreeView>
    );
};

export default TableComponent;