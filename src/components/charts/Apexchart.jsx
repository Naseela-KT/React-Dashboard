/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Apexchart.css'; // Import the CSS file for styling

const ApexChart = () => {
  const seriesData = [44, 55, 41];
  const seriesNames = ['Aquisition', 'Purchase', 'Retention'];
  const seriesColors = ['#5570F1', '#97A5EB', '#FFCC91']; // Define custom colors for each segment

  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
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
