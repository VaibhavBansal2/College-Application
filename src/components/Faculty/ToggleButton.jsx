import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ToggleButton({toggle, setToggle}) {
    return (
        <Box>
            <FormControlLabel
                sx={{
                    display: 'block',
                }}
                control={
                    <Switch
                        checked={toggle}
                        onChange={() => setToggle(!toggle)}
                        color="primary"
                    />
                }
                label={`Group By Department`}
            />
        </Box>
    );
}