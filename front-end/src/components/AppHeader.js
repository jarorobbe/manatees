import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

}))

export default function AppHeader() {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h6" color="inherit">
                    -- Manatees --
                </Typography>
            </Toolbar>
        </AppBar>
    );
}