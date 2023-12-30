import React, { useState } from 'react';

function Deposit({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("No authenticated user. Please log in.");
      return;
    }

    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      setMessage("Please enter a valid amount to deposit.");
      return;
    }

    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/account/deposit`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, amount: depositAmount }),
      });

      if (!response.ok) {
        const errorText = response.status === 400 ? "Bad Request" : "Deposit failed";
        throw new Error(errorText);
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setMessage(`Successfully deposited US$${depositAmount}`);

      // Clear the message after 3 seconds
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);

    } catch (error) {
      console.error("Deposit error:", error);
      setMessage(`Deposit failed: ${error.message}. Please try again.`);
    }
  };

  return (
    <div>
      <h1>Deposit</h1>
      <p>Current Balance: US$ {user?.balance || 0}</p>
      <form onSubmit={handleDeposit}>
        <input 
          type="number" 
          min="0.01" step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to Deposit"
        />
        <button type="submit">Deposit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Deposit;
