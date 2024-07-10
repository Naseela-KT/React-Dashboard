/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Apexchart.css';
import { FiChevronDown } from "react-icons/fi"; 

const ApexChart = () => {
  const seriesData = [60, 40, 20];
  const seriesNames = ['Aquisition', 'Purchase', 'Retention'];
  const seriesColors = ['#5570F1', '#97A5EB', '#FFCC91']; // Define custom colors for each segment

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      colors:["#5570F1","#FFCC91","#97A5EB"]
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    legend: {
      show: false,
    },
  });

  return (
    <div className="a-card">
    <div className="card-header">
        <div className="header-left">
         <h6>Marketing</h6>
        </div>
        <div className="header-right">
          <p>This week</p>
          <FiChevronDown size={20} />
        </div>
      </div>
      <div className="a-chart-header">
        {seriesData.map((value, index) => (
          <div key={index} className="a-series-item">
            <div className="a-series-color" style={{ backgroundColor: seriesColors[index] }}></div>
            <div className="a-series-name">{seriesNames[index]}</div>
          </div>
        ))}
      </div>
      <div className="a-chart-body">
        <div id="a-chart">
          <ReactApexChart options={options} series={seriesData} colors={seriesColors} type="donut" />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
