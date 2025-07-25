import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import LobbyCreation from './LobbyCreation.jsx';    // ← PascalCased import
import NotFoundPage from './NotFoundPage.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/lobby', element: <LobbyCreation /> },   // ← distinct path
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
