import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import DefaultLayout from './pages/layouts/DefaultLayout';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          </ProtectedRoute>
        } />
        <Route path="/projects" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Projects />
            </DefaultLayout>
          </ProtectedRoute>
        } />
        <Route path="/tasks" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Tasks />
            </DefaultLayout>
          </ProtectedRoute>
        } />
        <Route path="/users" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Users />
            </DefaultLayout>
          </ProtectedRoute>
        } />

        {/* <Route path="/auth/logout" element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
