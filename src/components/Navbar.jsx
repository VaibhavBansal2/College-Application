import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Dropdown from './Dropdown';

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Dropdown />
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;