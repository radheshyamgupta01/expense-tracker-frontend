import React from 'react';
import { Bar } from 'react-chartjs-2';

const ExpenseIncomeChart = ({ expenses, incomes }) => {
  const chartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'], // Add your categories here
    datasets: [
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Incomes',
        data: incomes,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Expense and Income Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ExpenseIncomeChart;
