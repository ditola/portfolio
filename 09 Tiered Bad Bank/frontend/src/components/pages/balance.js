function Balance({ user }) {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Balance</h1>
      <p>Welcome, {user.email}</p>
      <p>Your current Balance is: US${user.balance}</p>
    </div>
  );
}

export default Balance;
