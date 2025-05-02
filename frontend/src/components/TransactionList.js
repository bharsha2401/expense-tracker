import React from "react";

const TransactionList = ({ transactions }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div style={{ 
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', 'Roboto', sans-serif"
    }}>
      <h3 style={{
        color: "#333",
        marginBottom: "20px",
        fontSize: "24px",
        fontFamily: "'Poppins', 'Segoe UI', sans-serif"
      }}>Transactions</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {transactions.map((t, index) => (
          <li 
            key={index} 
            style={{ 
              padding: "15px",
              backgroundColor: t.type === "income" ? "#f0fff4" : "#fff5f5",
              borderRadius: "6px",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "'Segoe UI', 'Roboto', sans-serif"
            }}
          >
            <div>
              <div style={{ marginBottom: "5px" }}>
                <span style={{ 
                  fontWeight: "600",
                  color: t.type === "income" ? "#38a169" : "#e53e3e",
                  marginRight: "10px",
                  letterSpacing: "0.5px"
                }}>
                  {t.type === "income" ? "INCOME" : "EXPENSE"}
                </span>
                <span style={{ 
                  fontSize: "15px",
                  fontWeight: "500"
                }}>{t.category}</span>
              </div>
              {t.description && (
                <div style={{ 
                  color: "#666",
                  fontSize: "14px",
                  marginBottom: "5px",
                  fontWeight: "400"
                }}>
                  {t.description}
                </div>
              )}
              <div style={{ 
                color: "#888",
                fontSize: "12px",
                fontWeight: "400"
              }}>
                {formatDate(t.date)}
              </div>
            </div>
            <div style={{
              fontWeight: "600",
              color: t.type === "income" ? "#38a169" : "#e53e3e",
              fontSize: "16px",
              fontFamily: "'Segoe UI', 'Roboto', sans-serif"
            }}>
              {t.type === "income" ? "+" : "-"}₹{t.amount}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;