import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Fun from './Pages/Survey/Fun';
import Fun2 from './Pages/Survey/Fun2';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Fun></Fun>,
    element: <Fun2></Fun2>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
