import React from 'react';

import { makeStyles, Paper, Theme } from '@material-ui/core';

import Sections from './sections';
import SiteTitle from './sitetitle';


const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
  },
}));


function Appbar(): JSX.Element {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <SiteTitle />
      <Sections />
    </Paper>
  );
}


export default Appbar;
