import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainContent from './pages/MainContent';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApiFetching from './tabs/apiFetching';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  { path: "/portfolio/", element: <App /> },
  { path: "/main/", element: <MainContent /> },
  { path: "/api/", element: <ApiFetching /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
