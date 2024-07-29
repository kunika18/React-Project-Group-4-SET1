import React from 'react';
import Sidebar from '../Components/Sidebar/sidebar';
import Navbar from '../Components/Tab/Navbar';
import BasicExample from '../Components/Table/Table';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar className="sidebar" />
        <div className="main-content">
          <BasicExample />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
