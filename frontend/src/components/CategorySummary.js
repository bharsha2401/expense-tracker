import React from "react";

const CategorySummary = ({ transactions }) => {
  const categoryTotals = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      width: '80%',
      maxWidth: '500px',
      maxHeight: '80vh',
      overflow: 'auto'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Category Summary</h3>
      <div style={{
        display: 'grid',
        gap: '10px'
      }}>
        {Object.entries(categoryTotals).map(([category, total]) => (
          <div key={category} style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px',
            borderLeft: '4px solid #3498db'
          }}>
            <span style={{ fontWeight: 'bold' }}>{category}</span>
            <span>₹{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySummary;