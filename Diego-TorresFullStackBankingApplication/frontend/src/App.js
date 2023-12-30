import './App.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useMemo } from 'react';

import NavGuest from './components/navguest.js';
import NavUser from './components/navuser.js';

import Home from './components/pages/home.js';
import Register from './components/pages/register.js';
import Login from './components/pages/login.js';
import Balance from './components/pages/balance.js';
import Deposit from './components/pages/deposit.js';
import Withdraw from './components/pages/withdraw.js';
import Transfer from './components/pages/transfer.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const baseUrl = useMemo(() => `${process.env.REACT_APP_SERVER_URL}`, []);

  const apiRequest = async (endpoint, method = 'GET', body = null) => {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : null,
    };

    try {
      const response = await fetch(`${baseUrl}${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const user = await apiRequest(`/account/register/${name}/${email}/${password}`, 'GET');
      console.log('User registered:', user);
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate('/balance');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const user = await apiRequest(`/account/login/${email}/${password}`, 'GET');
      console.log('User logged in:', user);
      setCurrentUser(user);
      setIsLoggedIn(true);
      navigate('/balance');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <header>
        {isLoggedIn ? <NavUser onLogout={handleLogout} userName={currentUser?.name}/> : <NavGuest />}
      </header>
      <main>
        {isLoggedIn ? (
          <Routes>
          <Route path="/balance" element={<Balance user={currentUser} />} />
          <Route path="/deposit" element={<Deposit user={currentUser} setUser={setCurrentUser} />} />
          <Route path="/withdraw" element={<Withdraw user={currentUser} setUser={setCurrentUser} />} />
          <Route path="/transfer" element={<Transfer user={currentUser} setUser={setCurrentUser} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register handleRegister={handleRegister} />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
        )}
      </main>    
    </>
  );
}

export default App;
