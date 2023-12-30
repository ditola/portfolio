import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

function useGoogleLogin(onSuccess) {
  useEffect(() => {
    const handleCredentialResponse = (response) => {
      const userObject = jwtDecode(response.credential);
      onSuccess(userObject);
    };

    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: true,
    });

    google.accounts.id.renderButton(
      document.getElementById('google-button'),
      { theme: 'filled_black', size: 'large', shape: 'rectangular' }
    );
  }, []);
}

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onGoogleLoginSuccess = (userObject) => {
    if (userObject) {
      setEmail(userObject.email);
      handleLogin(userObject.email, 'GMAIL');
    }
  };

  useGoogleLogin(onGoogleLoginSuccess);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      handleLogin(email, password);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to log in');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="google-button-wrapper">
        <div className="google-button" id="google-button" />
      </div>
    </div>
  );
}

export default Login;
