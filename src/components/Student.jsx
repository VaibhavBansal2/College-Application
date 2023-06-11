import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Student = (props) => {
    return (
        <>
            <Box margin={1}>
                <div>{props.student.Name.split(' ')[0]}</div>
                <Box display={'flex'} marginBottom={1}>
                    <Box>{props.student.ID}</Box>
                    <Box paddingX={1}>|</Box>
                    <span>{props.student.Department.substring(0, 2).toUpperCase()}</span>
                </Box>
            </Box>
            <Divider/>
        </>
    )
}

export default Student