import React from 'react';
import { isMobileOnly } from 'react-device-detect';

import { makeStyles, Tab as MuiTab, Theme } from '@material-ui/core';


const useStyles = makeStyles((_theme: Theme) => ({
  tab: {
    fontFamily: 'Freehand 591 BT',
  }
}));


function Tab(props: Props): JSX.Element {
  return (
    <React.Fragment>
      { isMobileOnly ? <MobileTab {...props} /> : <DesktopTab {...props} /> }
    </React.Fragment>
  );
}


function DesktopTab(props: Props): JSX.Element {
  const { icon, label, onClick, value, ...rest } = props;
  const classes = useStyles();
  return (
    <MuiTab
      className={classes.tab}
      label={label}
      onClick={onClick}
      value={value}
      { ...rest }
    />
  );
}


function MobileTab(props: Props): JSX.Element {
  const { icon, label, onClick, value, ...rest } = props;
  const classes = useStyles();
  return (
    <MuiTab
      className={classes.tab}
      icon={icon}
      onClick={onClick}
      value={value}
      { ...rest }
    />
  );
}


type Props = {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
  value: number;
}


export default Tab;
