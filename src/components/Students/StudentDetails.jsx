import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Edit from './Popups/Edit';

const StudentDetailsBox = ({ student }) => {
    const [openEdit, setopenEdit] = useState(false)
    const [Error, setError] = useState(false);
    const [StudentDetails, setStudentDetails] = useState(student)

    useEffect(() => {
        setStudentDetails(student)
    }, [student])

    return (
        <Box sx={{ padding: 2, display: 'flex' }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <strong>Name:</strong> {StudentDetails.Name}
                        </Grid>
                        <Grid item>
                            <strong>ID:</strong> {StudentDetails.id}
                        </Grid>
                        <Grid item>
                            <strong>Department:</strong> {StudentDetails.Department}
                        </Grid>
                        <Grid item>
                            <strong>HOD:</strong> {StudentDetails.HOD}
                        </Grid>
                        <Grid item>
                            <strong>Leaves:</strong> {StudentDetails.Leaves}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="column">
                        <Grid item>
                            <strong>Semsester:</strong> {StudentDetails.Semester}
                        </Grid>
                        <Grid item>
                            <strong>Grades:</strong> {StudentDetails.Grades}
                        </Grid>
                        <Grid item>
                            <strong>DOJ:</strong> {StudentDetails.DOJ}
                        </Grid>
                        <Grid item>
                            <strong>DOB:</strong> {StudentDetails.DOB}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button variant="outlined" color="inherit" sx={{ height: 'fit-content' }} onClick={() => setopenEdit(true)}>Edit</Button>
            <Edit open={openEdit} onclose={() => { setopenEdit(false); setError(false) }} student={StudentDetails} setStudentDetails={setStudentDetails} Error={Error} setError={setError}></Edit>
        </Box >
    );
};

export default StudentDetailsBox;