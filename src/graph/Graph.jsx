import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Sample data
const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: { display: true, position: "top" },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const ChartComponent = () => {
  return (
    <div className="h-[700px] w-[700px]">
      <h2>Sales Data</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
