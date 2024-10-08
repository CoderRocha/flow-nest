import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// styles
import './App.css';

// pages & components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useAuthContext } from "./hooks/useAuthContext";
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user ? <Sidebar element={<Dashboard />} /> : ''}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
              path="/"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
              <Route
              path="/create"
              element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
              path="/projects/:id"
              element={user ? <Project /> : <Navigate to="/login" />}
              />
              <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
              />
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;