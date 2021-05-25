import React from 'react';
import { IntlProvider } from 'react-intl';

import Router from 'components/router';
import theme from 'theme';

import { Container, CssBaseline, ThemeProvider, withStyles } from '@material-ui/core';

import { appStyles, useStyles } from './AppStyles';


function App(props: Props): JSX.Element {
  const classes = useStyles(theme);
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={props.lang}>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth={false} className={classes.container}>
            <Router />
          </Container>
        </React.Fragment>
      </IntlProvider>
    </ThemeProvider>
  );
}


type Props = {
  lang: string;
}


export default withStyles(appStyles(theme))(App);
