import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import ApplicationContextProvider from './components/ApplicationContextProvider';
import React, { Suspense } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const DefaultLayout = React.lazy(() => import('./pages/layouts/DefaultLayout'))

function App() {
  return (
    <ApplicationContextProvider initialContext={{
      baseUrl: 'http://localhost:5000/api'
    }}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/auth/login" element={<Login />} />
            <Route path="*" name="Home" element={
              <ProtectedRoute>
                <DefaultLayout />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ApplicationContextProvider >
  );
}

export default App;
