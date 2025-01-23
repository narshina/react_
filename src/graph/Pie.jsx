import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChartFromAPI = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/chartData"); // Replace with your API URL
      const data = await response.json();

      // Transform API data into the format needed for the chart
      const labels = data.map((item) => item.category); // Example field for labels
      const values = data.map((item) => item.value); // Example field for data

      setChartData({
        labels,
        datasets: [
          {
            label: "Dataset",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Pie Chart from API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Pie
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Dynamic Pie Chart",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default PieChartFromAPI;
