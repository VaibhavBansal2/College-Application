import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from './Sidebar';
import ToggleButton from './Faculty/ToggleButton';
import api from '../api'
import NormalTable from './Faculty/NormalTable'
import TreeTable from './Faculty/TreeTable';

const Faculty = () => {
    const [toggle, setToggle] = React.useState(false);
    const [facultyData, setFacultyData] = useState([])
    const retrieveFaculties = async () => {
        const response = await api.get("/faculties");
        return response.data
    }

    useEffect(() => {
        const getAllFaculties = async () => {
            const AllFaculties = await retrieveFaculties();
            if (AllFaculties) setFacultyData(AllFaculties)
        };
        getAllFaculties()
    })
    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar />
                <Box height={'fit-content'} width={1} padding={2}>
                    <Box border={1} display="flex" flexDirection="column" sx={{ height: 'fit-content' }}>
                        <Box m={1} display="flex" justifyContent="flex-end">
                            <ToggleButton toggle={toggle} setToggle={setToggle} />
                        </Box>
                        <Box flexGrow={1} padding={2}>
                            <Box height={1}>
                                {
                                    toggle ?
                                        <TreeTable faculties={facultyData} />
                                        : <NormalTable faculties={facultyData} />
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Faculty