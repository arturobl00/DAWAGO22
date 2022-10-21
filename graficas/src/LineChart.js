import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [1, 3, 5, 5, 3, 4, 6, 4, 1];
const scores2 = [1, 3, 2, 2, 4, 4, 9, 3, 2];
const scores3 = [7, 8, 2, 3, 4, 9, 5, 5, 2];
const labels = [10, 20, 30, 40, 50, 600, 700, 800, 900];

const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function LineChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Mis datos",
          data: scores,
          tension: 0.3,
          borderColor: "rgb(75, 192, 192)",
          pointRadius: 6,
          pointBackgroundColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.3)",
        },
        {
          label: "Mis datos (2)",
          tension: 0.3,
          data: scores2,
          borderColor: "green",
          backgroundColor: "rgba(0, 255, 0, 0.3)",
          pointRadius: 6,
        },
        {
            label: "Mis datos (3)",
            tension: 0.3,
            data: scores3,
            borderColor: "green",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            pointRadius: 6,
          },
      ],
      labels,
    };
  }, []);

  return <Line data={data} options={options} />;
}
