'use client'

import {useEffect, useState} from "react";
import {actionsGetTotalRacesBetween} from "@/app/actions/races/actions";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function ChartTotalRacesBetween(props: {start: Number, end: Number}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allRaces = await actionsGetTotalRacesBetween(props.start, props.end)
      setData(allRaces);
    }

    fetchData();
  })

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
  );

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Total Races Between ${props.start} - ${props.end}`,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          display: false,
        }
      }
    },

  };

  const labels = data.map((item: any) => item.Season);

  const chartData = {
    labels,
    datasets: [
      {
        data: data.map((item: any) => item.TotalRaces),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      }
    ]
  }

  return (
    <div className={''}>
      <Bar className={''} options={options} data={chartData} />
    </div>
  )
}