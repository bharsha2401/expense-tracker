import React, { useState } from "react";
import AddIncome from "./components/AddIncome";
import AddExpense from "./components/AddExpense";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import CategorySummary from "./components/CategorySummary";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [showChart, setShowChart] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [activeForm, setActiveForm] = useState(null); // 'income' or 'expense' or null
  const [showCategorySummary, setShowCategorySummary] = useState(false);

  const showSummaryView = showCategorySummary || showTransactions || showBalance || showChart;

  const addTransaction = (transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    localStorage.setItem('transactions', JSON.stringify(newTransactions));
  };

  const goHome = () => {
    setActiveForm(null);
    setShowChart(false);
    setShowBalance(false);
    setShowTransactions(false);
    setShowCategorySummary(false);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all transactions? This cannot be undone.')) {
      setTransactions([]);
      localStorage.removeItem('transactions');
      goHome();
    }
  };

  return (
    <div style={{ 
      fontFamily: "Arial", 
      padding: "20px", 
      maxWidth: "800px", 
      margin: "auto",
      backgroundColor: '#fff',
      minHeight: '100vh',
      position: 'relative',
      paddingBottom: '60px' // Add padding to make room for footer
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        padding: '20px',
        borderBottom: '1px solid #eee'
      }}>
        <h1 
          onClick={goHome}
          style={{ 
            color: '#2c3e50',
            margin: 0,
            cursor: 'pointer'
          }}
        >
          Expense Tracker
        </h1>
        {activeForm && (
          <div style={{
            display: 'flex',
            gap: '25px'  // Increased gap between buttons
          }}>
            <button 
              onClick={() => {
                setShowCategorySummary(!showCategorySummary);
                setShowTransactions(false);
                setShowBalance(false);
                setShowChart(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                fontSize: '16px',  // Increased font size
                padding: '5px 0',  // Added vertical padding
                fontWeight: '600'  // Made font weight bolder
              }}
              onMouseOver={(e) => e.target.style.color = '#666'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              {showCategorySummary ? 'Hide Summary' : 'Summary'}
            </button>
            <button 
              onClick={() => {
                setShowTransactions(!showTransactions);
                setShowChart(false);
                setShowBalance(false);
                setShowCategorySummary(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                fontSize: '16px',  // Increased font size
                padding: '5px 0',  // Added vertical padding
                fontWeight: '600'  // Made font weight bolder
              }}
              onMouseOver={(e) => e.target.style.color = '#666'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              {showTransactions ? 'Hide Transactions' : 'Show Transactions'}
            </button>
            <button 
              onClick={() => {
                setShowBalance(!showBalance);
                setShowTransactions(false);
                setShowChart(false);
                setShowCategorySummary(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                fontSize: '16px',  // Increased font size
                padding: '5px 0',  // Added vertical padding
                fontWeight: '600'  // Made font weight bolder
              }}
              onMouseOver={(e) => e.target.style.color = '#666'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              {showBalance ? 'Hide Balance' : 'Show Balance'}
            </button>
            <button 
              onClick={() => {
                setShowChart(!showChart);
                setShowTransactions(false);
                setShowBalance(false);
                setShowCategorySummary(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                cursor: 'pointer',
                fontSize: '16px',  // Increased font size
                padding: '5px 0',  // Added vertical padding
                fontWeight: '600'  // Made font weight bolder
              }}
              onMouseOver={(e) => e.target.style.color = '#666'}
              onMouseOut={(e) => e.target.style.color = '#333'}
            >
              {showChart ? 'Close Breakdown' : 'Show Breakdown'}
            </button>
          </div>
        )}
      </div>

      {!showSummaryView && (
        <>
          {!activeForm ? (
            <div style={{
              textAlign: 'center',
              marginTop: '100px'
            }}>
              <h2 style={{
                color: '#2c3e50',
                marginBottom: '30px'
              }}>Welcome to Expense Tracker</h2>
              <p style={{
                color: '#7f8c8d',
                marginBottom: '40px'
              }}>Manage your income and expenses efficiently</p>
              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                marginBottom: '30px' // Add margin below buttons
              }}>
                <button
                  onClick={() => setActiveForm('income')}
                  style={{
                    padding: '15px 30px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Add Income
                </button>
                <button
                  onClick={() => setActiveForm('expense')}
                  style={{
                    padding: '15px 30px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Add Expense
                </button>
              </div>
              {transactions.length > 0 && (
                <button
                  onClick={clearAllData}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: '#dc3545',
                    border: '2px solid #dc3545',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#dc3545';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#dc3545';
                  }}
                >
                  Clear All Data
                </button>
              )}
            </div>
          ) : (
            <div style={{
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: '20px'
              }}>
                <button
                  onClick={() => setActiveForm(null)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Back
                </button>
              </div>
              {activeForm === 'income' ? (
                <AddIncome onAdd={addTransaction} />
              ) : (
                <AddExpense onAdd={addTransaction} />
              )}
            </div>
          )}
        </>
      )}

      {showTransactions && (
        <div style={{
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <TransactionList transactions={transactions} />
        </div>
      )}

      {showBalance && (
        <BalanceCard transactions={transactions} />
      )}

      {showCategorySummary && (
        <CategorySummary transactions={transactions} />
      )}

      <ExpenseChart transactions={transactions} visible={showChart} />

      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#2c3e50',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        fontSize: '14px'
      }}>
        © 2025 Harsha Vardhan Reddy. All rights reserved.
      </div>
    </div>
  );
}

export default App;
