import { useState } from "react";

function AddTransaction({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (text === "" || amount === "") return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount,
    };

    onAdd(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>

      <form onSubmit={submitHandler}>
        <div>
          <label>Text</label>
          <input
            type="text"
            placeholder="Enter description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label>
            Amount <br />
            (negative = expense, positive = income)
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
