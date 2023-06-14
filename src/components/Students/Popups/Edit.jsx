import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import api from '../../../api';

const Edit = ({ open, onclose, student, setStudentDetails, Error, setError }) => {
    var [dob, mob, yob] = student.DOB.split('/')
    var [doj, moj, yoj] = student.DOJ.split('/')
    if (moj && moj.length === 1)
        moj = "0" + moj
    if (doj && doj.length === 1)
        doj = "0" + doj
    if (dob && dob.length === 1)
        dob = "0" + dob
    if (mob && mob.length === 1)
        mob = "0" + mob

    const [studentData, setStudentData] = useState({
        Name: student.Name,
        Department: student.Department,
        HOD: student.HOD,
        Semester: student.Semester,
        Grades: student.Grades,
        DOJ: student.DOJ,
        DOB: student.DOB,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!studentData.Name || !studentData.Department || !studentData.HOD || !studentData.DOB || !studentData.DOJ) {
            setError(true)
            return;
        }

        if (studentData.Semester < 1 || studentData.Semester > 10) {
            setError(true)
            return;
        }

        if (studentData.Grades < 0 || studentData.Grades > 100) {
            setError(true)
            return;
        }

        const updatedStudent = {
            ...student,
            Name: studentData.Name,
            Department: studentData.Department,
            HOD: studentData.HOD,
            Semester: studentData.Semester,
            Grades: studentData.Grades,
            DOJ: studentData.DOJ,
            DOB: studentData.DOB
        };
        api.put(`/students/${student.id}`, updatedStudent)
            .then(() => {
                setStudentDetails(updatedStudent)
                onclose();
            })
            .catch(err => console.log(err));
    }

    return (
        <Dialog open={open} onClose={onclose}>
            <DialogTitle>Edit Student Details</DialogTitle>
            <DialogContent>
                {Error ? <Typography color={'red'}>Invalid Input</Typography> : ''}
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6} marginTop={'1rem'}>
                            <TextField
                                label="Name"
                                name="Name"
                                defaultValue={student.Name}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} marginTop={'1rem'}>
                            <TextField
                                label="Department"
                                name="Department"
                                defaultValue={student.Department}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="HOD"
                                name="HOD"
                                defaultValue={student.HOD}
                                onChange={handleChange}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Semester"
                                name="Semester"
                                defaultValue={student.Semester}
                                onChange={handleChange}
                                type="number"
                                inputProps={{
                                    min: 1,
                                    max: 8,
                                }}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel>Date of Joining *</InputLabel>
                            <TextField
                                name='DOJ'
                                defaultValue={yoj + "-" + moj + "-" + doj}
                                onChange={handleChange}
                                type="date"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel>Date of Birth *</InputLabel>
                            <TextField
                                name='DOB'
                                defaultValue={yob + "-" + mob + "-" + dob}
                                onChange={handleChange}
                                type="date"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Grades"
                                name="Grades"
                                defaultValue={student.Grades}
                                onChange={handleChange}
                                type="number"
                                inputProps={{
                                    min: 0,
                                    max: 100,
                                }}
                                required
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={onclose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Edit