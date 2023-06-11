import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
    customDrawerPaper: {
        '&.css-12i7wg6-MuiPaper-root-MuiDrawer-paper': {
            position: 'static'
        },
    },
}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.customDrawerPaper,
            }}
        >
            <Toolbar />
            <List>
                {['Students', 'Departments', 'Faculty'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar