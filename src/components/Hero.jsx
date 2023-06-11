import { React } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Searchbox from './Searchbox'
import StudentDetailsBox from './StudentDetails';
import LeaveTable from './LeaveDetails';

const leaveDetails = [
    { id: 1, startDate: '2023-06-01', endDate: '2023-06-03', reason: 'Family event', leaveType: 'Personal' },
    { id: 2, startDate: '2023-06-10', endDate: '2023-06-14', reason: 'Vacation', leaveType: 'Paid' },
    { id: 3, startDate: '2023-06-19', endDate: '2023-06-20', reason: 'Sick', leaveType: 'Paid' },
    // Additional leave entries
];

const Hero = () => {
    return (
        <Box display="flex" flexDirection="column" height='calc(100vh - 120px)'>
            <Box m={1} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="inherit">ADD STUDENT</Button>
            </Box>
            <Box border={1} overflow={'hidden'}>
                <Box display={'flex'} >
                    <Searchbox />
                    <Box sx={{ border: '1px solid #ccc', width: '100%' }}>
                        <StudentDetailsBox />
                        <LeaveTable leaveDetails={leaveDetails} />
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Hero;
