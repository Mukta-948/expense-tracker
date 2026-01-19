function Balance({ transactions }) {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total.toFixed(2)}</h1>
    </div>
  );
}

export default Balance;
