import { useQuery } from 'react-query';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1';

const fetchDashboard = async () => {
  const token = localStorage.getItem('token');
  if (!token) return { kids: [], recentActivities: [] };

  const response = await fetch(`${API_BASE_URL}/parent/dashboard`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const resData = await response.json();
  const children = resData.data?.result?.children || [];
  
  // map to expected frontend structure if needed
  const kids = children.map(c => ({
    id: c.id,
    name: c.name,
    avatar: c.avatar,
    age: c.age_group,
    stars: c.total_stars,
    coins: c.total_coins,
    level: c.level,
  }));

  return { kids, recentActivities: resData.data?.result?.recentActivities || [] };
};

export const useKids = () => {
  return useQuery('dashboard', fetchDashboard, {
    select: data => data.kids
  });
};

export const useDashboard = () => {
  return useQuery('dashboard', fetchDashboard);
};