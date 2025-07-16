import React from 'react';
import TradingChart from '../charts/TradingChart';

const Dashboard = () => {
  return (
    <div>
      <h2>Real-Time Monitoring</h2>
      <TradingChart />
      {/* Other dashboard components will go here */}
    </div>
  );
};

export default Dashboard;
