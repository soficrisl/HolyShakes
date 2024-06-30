import React from 'react';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Insight from './Insight';
import Chart from 'chart.js/auto';
import { PieChart } from 'react-minimal-pie-chart';
import { getProductsDay } from '../controllers/products';


// Dias Lun - Dom
//salado 1, 19, 3
//dulce 1, 19, 3

export default function Graphics(props) {
  const data = {
    labels: ['Sunday', 'Monday', 'Thuersday'],
    datasets: [
      {
        label: 'Dulce',
        data: [12, 19, 3],
        stack: 1,
        borderWidth: 1,
      },
      {
        label: 'Salado',
        data: [1, 19, 3],
        stack: 1,
        borderWidth: 1,
      },
      {
        label: 'Bedida',
        data: [1, 19, 3],
        stack: 1,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className='bg-white w-auto justify-center flex p-2 '>
            <Bar data={data} options={options} />
      </div>
    </>
  );
}