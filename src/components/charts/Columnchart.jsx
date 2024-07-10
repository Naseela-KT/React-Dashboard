/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FiChevronDown } from "react-icons/fi";

const ColumnChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63]
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Sept10', 'Sept11', 'Sept12', 'Sept13', 'Sept14', 'Sept15', 'Sept16']
    },
    fill: {
      opacity: 1,
      colors:["#5570F1"]
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        }
      }
    }
  });

  return (
    <>
       <div className="card-header">
        <div className="header-left">
         <h6 style={{marginRight:"7px"}}>Summary</h6>
         <select className="form-select-s custom-select" >
          <option value="Completed">Sales</option>
        </select>
        </div>
        <div className="header-right">
          <p>Last 7 Days</p>
          <FiChevronDown size={20} />
        </div>
      </div>
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </>

       

  );
}



export default ColumnChart;
