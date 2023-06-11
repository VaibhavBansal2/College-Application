import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import cities from '../cities.json'


const Dropdown = () => {
    const [selectedCity, setSelectedCity] = useState("Pune");

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1 }}>
            <Select variant='outlined' value={selectedCity} onChange={handleCityChange} autoWidth style={{ color: 'white' }}>
                {
                    cities.map(city => <MenuItem value={city.name} key={city.id}>{city.name}</MenuItem>)
                }
            </Select>
        </FormControl>
    );
};

export default Dropdown;