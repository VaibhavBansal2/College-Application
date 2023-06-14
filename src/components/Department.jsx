import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Sidebar';

const Department = () => {
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <div>Department</div>
                {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                    <Hero />
                </Box> */}
            </Box>
        </>
    )
}

export default Department