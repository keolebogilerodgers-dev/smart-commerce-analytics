import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const AnalyticsCard = ({ title, value, change, icon, color = 'primary' }) => {
  return (
    <Card className="border-0 shadow-sm h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h6 className="text-muted mb-2">{title}</h6>
            <h3 className="mb-0">{value}</h3>
          </div>
          <div className={`bg-${color}-subtle p-3 rounded-circle`}>
            <span className={`text-${color}`}>{icon}</span>
          </div>
        </div>
        <div className="mt-3">
          <span className={`me-2 ${change >= 0 ? 'text-success' : 'text-danger'}`}>
            {change >= 0 ? <FaArrowUp /> : <FaArrowDown />}
            {Math.abs(change)}%
          </span>
          <span className="text-muted">vs last month</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AnalyticsCard;
