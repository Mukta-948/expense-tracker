function IncomeExpense({ transactions }) {
  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(a => a > 0)
    .reduce((acc, a) => acc + a, 0);

  const expense = amounts
    .filter(a => a < 0)
    .reduce((acc, a) => acc + a, 0);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h4>Income</h4>
        <p style={{ color: "green" }}>₹{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p style={{ color: "red" }}>₹{Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
