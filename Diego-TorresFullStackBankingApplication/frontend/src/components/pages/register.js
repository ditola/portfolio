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

function Register({ handleRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onGoogleLoginSuccess = (userObject) => {
    if (userObject) {
      setName(userObject.name);
      setEmail(userObject.email);
      handleRegister(userObject.name, userObject.email, 'GMAIL');
    }
  };

  useGoogleLogin(onGoogleLoginSuccess);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
      handleRegister(name, email, password);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to register');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <div className="google-button-wrapper">
        <div className="google-button" id="google-button" />
      </div>
    </div>
  );
}

export default Register;
