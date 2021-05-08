import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from 'universe/Navigation';

import routes from './routes/routes';

const listOfLink = [
  {
    label: 'Light',
    path: '/light-side',
  },
  {
    label: 'Dark',
    path: '/dark-side',
  },
];

const App = () => (
  <BrowserRouter basename="/characters">
    <div>
      <h2>Star Wars Characters</h2>
      <Navigation listOfLink={listOfLink} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
          ))}
        </Switch>
      </React.Suspense>
    </div>
  </BrowserRouter>
);

export default App;
