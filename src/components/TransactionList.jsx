function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h3>History</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "minus" : "plus"}>
            <span>{t.text}</span>

            <span className="amount">
              ₹{Math.abs(t.amount)}
              <button
                className="delete-btn"
                onClick={() => onDelete(t.id)}
              >
                ✕
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
