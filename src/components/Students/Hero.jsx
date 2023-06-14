import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Searchbox from './Searchbox'
import StudentDetailsBox from './StudentDetails';
import LeaveTable from './LeaveDetails';
import Add from './Popups/Add';
import api from '../../api'

const Hero = () => {
    const retrieveStudents = async () => {
        const response = await api.get("/students");
        return response.data
    }

    function filterById(jsonData, id) {
        return jsonData.filter(jsonObject => (jsonObject.id === id))[0];
    }

    useEffect(() => {
        const getAllStudents = async () => {
            const AllStudents = await retrieveStudents();
            if (AllStudents) {
                setStudentData(AllStudents)
                setStudent(AllStudents[0].id);
            }
        };
        getAllStudents()
    }, [])

    const [Student, setStudent] = useState()
    const handleClick = (id) => {
        setStudent(id)
    }

    const [studentData, setStudentData] = useState([])

    const [openAdd, setopenAdd] = useState(false)
    const [Error, setError] = useState(false);

    return (
        <Box display="flex" flexDirection="column" height='calc(100vh - 120px)'>
            <Box m={1} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="inherit" onClick={() => setopenAdd(true)}>ADD STUDENT</Button>
            </Box>
            <Box border={1} overflow={'hidden'}>
                <Box display={'flex'} >
                    <Searchbox id={Student} onclick={handleClick} StudentData={studentData} />
                    {
                        Student ?
                            <Box sx={{ border: '1px solid #ccc', width: '100%' }}>
                                <StudentDetailsBox student={filterById(studentData, Student)} />
                                <LeaveTable leaveDetails={filterById(studentData, Student)['Leave Details']} />
                            </Box> : ''
                    }
                </Box>
            </Box>
            <Add open={openAdd} onclose={() => { setopenAdd(false); setError(false) }} Error={Error} setError={setError} size={studentData.length} students = {studentData} setStudents={setStudentData}></Add>
        </Box>
    );
};

export default Hero;
