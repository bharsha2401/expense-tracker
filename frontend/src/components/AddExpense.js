import React, { useState } from "react";

const AddExpense = ({ onAdd }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const expenseCategories = [
    "Food",
    "Travel",
    "Money Transfer",
    "Shopping",
    "Bills & Utilities",
    "Entertainment",
    "Health",
    "Education",
    "Groceries",
    "Rent",
    "Miscellaneous"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) return;
    onAdd({ 
      type: "expense", 
      amount: +amount, 
      category, 
      date,
      description 
    });
    setAmount("");
    setCategory("");
    setDate("");
    setDescription("");
  };

  return (
    <div style={{
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '15px', color: '#dc3545' }}>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: 'white'
            }}
          >
            <option value="">Select Category</option>
            {expenseCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Amount (₹)"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description (optional)"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}
          />
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
