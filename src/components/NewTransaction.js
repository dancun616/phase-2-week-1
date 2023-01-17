import React, { useState } from 'react';
function NewTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, { date, description, category, amount }]);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <input type="text" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Previous Transactions</h2>
        <ol>
          {transactions.map((transaction, index) => (
            <li key={index}>
              <p>Date: {transaction.date}</p>
              <p>Description: {transaction.description}</p>
              <p>Category: {transaction.category}</p>
              <p>Amount: {transaction.amount}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default NewTransaction;