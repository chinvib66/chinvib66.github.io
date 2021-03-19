import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { NavBar } from 'components/Nav';
import { ProjectsPage } from 'pages/Projects';
import { PrevExpPage } from 'pages/Experiences';

const routes = [
  {
    name: 'HomePage',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Experiences',
    path: '/experiences',
    exact: true,
    component: PrevExpPage,
  },
  {
    name: 'Projects',
    path: '/projects',
    exact: true,
    component: ProjectsPage,
  },
  //   {
  //     name: "Blog",
  //     path: "/blog",
  //     exact: true,
  //   },
  //   {
  //     name: "View Blog",
  //     path: "/blog/:id",
  //     exact: true,
  //   },
];

const createRoutes = () => {
  const routeElems = routes.map((route, index) => {
    return (
      <Route
        exact={route.exact}
        key={route.path || `Not Found ${index}`}
        path={route.path}
        render={() => (
          <div>
            <NavBar />
            <route.component />
          </div>
        )}
      />
    );
  });
  return routeElems;
};

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* All Routes elements are created here */}
        {createRoutes()}
      </Switch>
    </Router>
  );
};
