import React from 'react';
import { isMobileOnly } from 'react-device-detect';

import { makeStyles, Theme, Typography } from '@material-ui/core';
import { FavoriteBorder } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: '5%',
    height: 'auto'
  },
  siteTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'Home Winter',
    letterSpacing: '2px'
  }
}));


function NameDesktop(): JSX.Element {
  const classes = useStyles();
  return (
    <Typography variant={'h4'} className={classes.siteTitle}>
      Awesome website
    </Typography>
  );
}


function NameMobile(): JSX.Element {
  const classes = useStyles();
  return (
    <Typography variant={'h4'} className={classes.siteTitle}>
      E {<FavoriteBorder />} G
    </Typography>
  );
}


function SiteTitle(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      { isMobileOnly ? <NameMobile /> : <NameDesktop /> }
    </div>
  );
}


export default SiteTitle;
