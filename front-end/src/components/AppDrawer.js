import React from 'react';
import {
    useTheme,
    Drawer,
    List,
    Typography,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

const drawerWidth = 240;

const AppDrawer = () => (
    <Drawer width={drawerWidth} flex></Drawer>
);

export default AppDrawer;