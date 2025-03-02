import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import Dashboard from './pages/dashboardPages/Dashboard';
import Categories from './pages/dashboardPages/Categories';
import Topics from './pages/dashboardPages/Topics';
import SimpleLayout from './layouts/simpleLayout/SimpleLayout';
import Home from './pages/simpleLayout/Home';

export default function Router() {

  const isAuthenticated = localStorage.getItem('token');
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: (true) ? <DashboardLayout /> : <Navigate to="/login" replace />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "categories", element: <Categories /> },
        { path: "topics/:categoryID", element: <Topics /> },
      ]
    },
    {
      path: '',
      element: <SimpleLayout />,
      children: [
        { path: "/", element: <Home /> },

      ],
    },
  ]);

  return routes;
}