// src/components/Charts.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const options = {
  scales: {
    x: {
      type: 'category', // Ensure x-axis is configured as category type
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    },
    y: {
      beginAtZero: true
    }
  }
};

const Charts = () => {
  return <Bar data={data} options={options} />;
};

export default Charts;
