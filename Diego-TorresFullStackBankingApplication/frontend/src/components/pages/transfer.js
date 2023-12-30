import React, { useState } from 'react';

function Transfer({ user, setUser }) {
  const [amount, setAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("No authenticated user. Please log in.");
      return;
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      setMessage("Please enter a valid amount to transfer.");
      return;
    }

    try {
      let url = `${process.env.REACT_APP_SERVER_URL}/account/transfer`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromEmail: user.email,
          toEmail: recipientEmail,
          amount: transferAmount,
        }),
      });
      if (!response.ok) {
        throw new Error('Transfer failed');
      }
      const updatedUser = await response.json();
      if(user.balance < transferAmount) {
        setMessage(`Insufficient funds`);
      }
      else {
        setUser(updatedUser);
        setMessage(`Successfully transferred US$${transferAmount} to ${recipientEmail}`);
      }

      // Clear the message after 3 seconds
      setTimeout( () => { setMessage('') }, 3000 );

      setAmount('');
      setRecipientEmail('');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h1>Transfer</h1>
      <p>Current Balance: US$ {user.balance}</p>
      <form onSubmit={handleTransfer}>
        <input 
          type="email" 
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          placeholder="Recipient's Email"
        />
        <input 
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount to Transfer"
        />
        <button type="submit">Transfer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Transfer;
