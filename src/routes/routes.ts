import React from 'react';
const DarkSide = React.lazy(() => import('../components/dark-side'));
const LightSide = React.lazy(() => import('../components/light-side'));

const routes = [
  {
    path: '/dark-side',
    component: DarkSide,
    exact: true,
  },
  {
    path: '/light-side',
    component: LightSide,
    exact: true,
  },
];

export default routes;
