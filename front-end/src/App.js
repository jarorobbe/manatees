import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
  ThemeProvider,
} from '@material-ui/core';

import AppDrawer from './components/AppDrawer'
import AppHeader from './components/AppHeader';
import Home from './pages/Home';

import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027',
      contrastText: '#ffffff',
    },
  },
});

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <ThemeProvider theme={customTheme}>
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <AppDrawer />
    <main className={classes.main}>
      <Home />
    </main>
  </Fragment>
  </ThemeProvider>
);


export default withStyles(styles) (App);

