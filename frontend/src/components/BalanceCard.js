import React from "react";

const BalanceCard = ({ transactions }) => {
  const income = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.type === "expense").reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  return (
    <div style={{ background: "#f0f0f0", padding: "10px", margin: "20px 0", borderRadius: "8px" }}>
      <h2>Balance: ₹{balance}</h2>
      <p>Total Income: ₹{income}</p>
      <p>Total Expenses: ₹{expenses}</p>
    </div>
  );
};

export default BalanceCard;
