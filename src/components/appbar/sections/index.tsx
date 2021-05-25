import React from 'react';

import Tab from 'components/appbar/sections/tab';

import { Tabs } from '@material-ui/core';
import { HomeOutlined, NoteOutlined, PeopleOutline } from '@material-ui/icons';

import { Section } from './utils';

import useStyles from './styles';


function Sections(): JSX.Element {

  const [value, setValue] = React.useState(Section.HOME);
  const classes = useStyles();

  const handleChange = React.useCallback(
    (_event: React.ChangeEvent<unknown>, newValue: number) => {
      setValue(newValue);
    }, []
  );

  const onHomeClick = React.useCallback(
    () => {
      //console.log('Home Clicked');
    }, []
  );

  const onCIClick = React.useCallback(
    () => {
      //console.log('CI Clicked');
    }, []
  );

  const onCDClick = React.useCallback(
    () => {
      //console.log('CD Clicked');
    }, []
  );

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='standard'
      indicatorColor='primary'
      textColor='primary'
      classes={{ indicator: classes.indicator }}
      style={{ fontFamily: 'Home Winter' }}
    >
      <Tab
        value={Section.HOME}
        icon={<HomeOutlined />}
        label={'Home'}
        onClick={onHomeClick}
      />
      <Tab
        value={Section.US}
        icon={<PeopleOutline />}
        label={'CI'}
        onClick={onCIClick}
      />
      <Tab
        value={Section.STORY}
        icon={<NoteOutlined />}
        label={'CD'}
        onClick={onCDClick}
      />
    </Tabs>
  );
}


export default Sections;
