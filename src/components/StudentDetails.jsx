import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import studentData from '../Student_data.json'
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';

const student = studentData[0];

const StudentDetailsBox = () => {
    return (
        <Box sx={{ padding: 2, display: 'flex' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <strong>Name:</strong> {student.Name}
                        </Grid>
                        <Grid item>
                            <strong>ID:</strong> {student.ID}
                        </Grid>
                        <Grid item>
                            <strong>Department:</strong> {student.Department}
                        </Grid>
                        <Grid item>
                            <strong>HOD:</strong> {student.HOD}
                        </Grid>
                        <Grid item>
                            <strong>Leaves:</strong> {student.Leaves}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <strong>Semsester:</strong> {student.Semester}
                        </Grid>
                        <Grid item>
                            <strong>Grades:</strong> {student.Grades}
                        </Grid>
                        <Grid item>
                            <strong>DOJ:</strong> {student.DOJ}
                        </Grid>
                        <Grid item>
                            <strong>DOB:</strong> {student.DOB}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button variant="outlined" color="inherit" sx={{ height: 'fit-content' }}>Edit</Button>
        </Box>
    );
};

export default StudentDetailsBox;