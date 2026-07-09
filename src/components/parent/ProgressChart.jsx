import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = ({ recentActivities = [] }) => {
  // Aggregate stats over the last 7 days
  const today = new Date();
  const last7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  }).reverse();

  const starsEarned = Array(7).fill(0);
  const activitiesDone = Array(7).fill(0);

  recentActivities.forEach(act => {
    const actDate = new Date(act.created_at);
    // Find how many days ago it was
    const daysAgo = Math.floor((today - actDate) / (1000 * 60 * 60 * 24));
    if (daysAgo >= 0 && daysAgo < 7) {
      const index = 6 - daysAgo; // 6 is today, 0 is 6 days ago
      starsEarned[index] += act.stars_earned || 0;
      activitiesDone[index] += 1;
    }
  });

  const data = {
    labels: last7Days,
    datasets: [
      {
        label: 'Stars Earned',
        data: starsEarned,
        backgroundColor: 'rgba(167, 139, 250, 0.6)',
        borderColor: 'rgba(167, 139, 250, 1)',
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: 'Activities Completed',
        data: activitiesDone,
        backgroundColor: 'rgba(255, 107, 107, 0.6)',
        borderColor: 'rgba(255, 107, 107, 1)',
        borderWidth: 1,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full p-2 sm:p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;