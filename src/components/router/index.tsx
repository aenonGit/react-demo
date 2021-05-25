import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Appbar from 'components/appbar';
import Home from 'components/home';
import { Route as OurStoryRoute } from 'components/router/utils';


function HomeComponent(_props: Props) {
  return (
    <React.Fragment>
      <Appbar />
      <Home />
    </React.Fragment>
  );
}


function Router(_props: Props): JSX.Element {
  const getHome = React.useCallback(() => HomeComponent({}), []);

  return (
    <BrowserRouter basename="/react-demo">
      <Switch>
        <Route
          exact
          path={OurStoryRoute.Home}
          render={getHome}
        />
      </Switch>
    </BrowserRouter>
  );
}


type Props = unknown


export default Router;
