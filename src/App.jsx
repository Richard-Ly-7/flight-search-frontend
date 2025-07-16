import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Results from './pages/Results';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile'
import FlightDetail from './pages/FlightDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleLogin = (user) => {
    setUser(user);
    setMessage('Logged in successfully.');
  };

  const handleLogout = async () => {
    const api = import.meta.env.VITE_API_URL;
    await fetch(`${api}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });

    setUser(null);
    setMessage('Logged out.');
  };

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    fetch(`${api}/api/auth/me`, {
      credentials: 'include'
    })
      .then(res => res.ok ? res.json() : null)
      .then(data => setUser(data))
  }, [])

  return (
    <>
      <Navbar token={user} onLogout={handleLogout} />

      {message && (
        <div>
          {message}
        </div>
      )}

      <Routes>
        <Route path="/signup" element={<Signup onAuth={handleLogin} setMessage={setMessage} />} />
        <Route path="/login" element={<Login onAuth={handleLogin} setMessage={setMessage} />} />
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/flights/:id" element={user ? <FlightDetail token={user} /> : <Navigate to="/login" />} />
        <Route path="/profile" element={user ? <Profile token={user} /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );

}

export default App;
