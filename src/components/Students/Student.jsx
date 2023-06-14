import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Student = ({ student, curr }) => {
    return (
        <>
            <Box margin={1} sx={{ cursor: 'pointer', color: curr ? '#1976d2' : 'inherit' }} >
                <div>{student.Name.split(' ')[0]}</div>
                <Box display={'flex'} marginBottom={1}>
                    <Box>{student.id}</Box>
                    <Box paddingX={1}>|</Box>
                    <span>{student.Department.substring(0, 2).toUpperCase()}</span>
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default Student