import React, { useState } from 'react';

function Withdraw({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleWithdraw = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("No authenticated user. Please log in.");
      return;
    }

    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setMessage("Please enter a valid amount to withdraw.");
      return;
    }

    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/account/withdraw`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          amount: withdrawAmount,
        }),
      });
      if (!response.ok) {
        throw new Error('Withdrawal failed');
      }
      const updatedUser = await response.json();

      if(user.balance < withdrawAmount) {
        setMessage(`Insufficient funds`);
      }
      else {
        setUser(updatedUser);
        setMessage(`Successfully withdrawn US$${withdrawAmount}`);
      }

      // Clear the message after 3 seconds
      setTimeout( () => { setMessage('') }, 3000 );

      setAmount('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Withdraw</h1>
      <p>Current Balance: US$ {user.balance}</p>
      <form onSubmit={handleWithdraw}>
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to Withdraw"
        />
        <button type="submit">Withdraw</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Withdraw;
