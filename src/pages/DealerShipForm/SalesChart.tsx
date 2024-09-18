import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "FY 2019-20",
    "FY 2020-21",
    "FY 2021-22",
    "FY 2022-23",
    "FY 2023-24",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
    {
      label: "Purchases",
      data: [45, 49, 60, 70, 46],
      backgroundColor: "rgba(153,102,255,0.4)",
      borderColor: "rgba(153,102,255,1)",
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

const SalesChart: React.FC = () => {
  return (
    <div className=" flex justify-center align-middle md:h-[100%] md:w-[100%] py-8">
    <div className=" mx-4 w-[25rem] md:h-[70%] md:w-[60%] ">
      <Bar data={data} options={options} />
    </div>
    </div>
  );
};

export default SalesChart;