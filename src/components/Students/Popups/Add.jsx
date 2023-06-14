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

const Add = ({ open, onclose, Error, setError, size, students, setStudents }) => {
  const [studentData, setStudentData] = useState({
    "Name": "",
    "id": 0,
    "Department": "",
    "HOD": "",
    "Semester": 0,
    "Grades": -1,
    "DOJ": "",
    "DOB": "",
    "Leaves": 0,
    "Leave Details": []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!studentData.Name || !studentData.Department || !studentData.HOD || !studentData.DOB || !studentData.DOJ) {
      setError(true)
      return;
    }

    if (studentData.Semester < 1 || studentData.Semester > 8) {
      setError(true)
      return;
    }

    if (studentData.Grades < 0 || studentData.Grades > 100) {
      setError(true)
      return;
    }

    studentData.id = size + 1
    api.post('/students', studentData)
      .then(() => {
        setStudents([...students, studentData]);
        setStudentData({
          "Name": "",
          "id": 0,
          "Department": "",
          "HOD": "",
          "Semester": 0,
          "Grades": -1,
          "DOJ": "",
          "DOB": "",
          "Leaves": 0,
          "Leave Details": []
        });
        onclose();
      })
      .catch(err => console.log(err));
  }

  return (
    <Dialog open={open} onClose={onclose}>
      <DialogTitle>Add Student</DialogTitle>
      <DialogContent>
        {Error ? <Typography color={'red'}>Invalid Input</Typography> : ''}
        <form>
          <Grid container spacing={2}>
            <Grid item xs={6} marginTop={'1rem'}>
              <TextField
                label="Name"
                name="Name"
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6} marginTop={'1rem'}>
              <TextField
                label="Department"
                name="Department"
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="HOD"
                name="HOD"
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Semester"
                name="Semester"
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
                onChange={handleChange}
                name="DOJ"
                type="date"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Date of Birth *</InputLabel>
              <TextField
                name="DOB"
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
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Add