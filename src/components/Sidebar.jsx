import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';

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
    const location = useLocation();
    const [page, setPage] = React.useState('Student')

    React.useEffect(() => {
        const currentPath = location.pathname.substring(1);
        setPage(currentPath || 'Student');
    }, [location]);

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
                {['Student', 'Department', 'Faculty'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <Link to={`/${text}`} style={{ textDecoration: "none", color: (text === page) ? '#1976d2' : 'inherit' }}>
                            <ListItemButton onClick={() => { setPage(text) }}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar