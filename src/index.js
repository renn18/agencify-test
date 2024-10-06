import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Layout from './components/Layout';
import Home from './page/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>}
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
