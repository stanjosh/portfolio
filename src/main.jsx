
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResumeApp from './components/Resume.component.jsx'
import ErrorPage from './components/error-page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ResumeApp />
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="1030861782119-b8pmvsg1sf6r7ej4j742odr8o6bmk5m8.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router} /> 
    </React.StrictMode>
  </GoogleOAuthProvider>
,
)
