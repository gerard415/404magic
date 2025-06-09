import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { date: 'Apr 1', views: 400 },
  { date: 'Apr 8', views: 1250 },
  { date: 'Apr 17', views: 2800 },
  { date: 'Apr 3', views: 1300 },
  { date: 'Apr 11', views: 1100 },
  { date: 'Apr 26', views: 2700 },
  { date: 'Apr 31', views: 2300 },
  { date: 'Apr 29', views: 4300 },
];

const PageViewsChart = () => {
  return (
    <div className="w-full border h-96 border-gray-300  bg-white p-4 rounded-xl shadow">
      <h2 className="text-base font-semibold mb-4">404 Page Views</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="views" stroke="#4EAD8D" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageViewsChart;
