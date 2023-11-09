import React from 'react';

export const StatsCard = () => {
  return (
    <div className="card mt-3">
      <div className="card-content">
        <div className="row row-group m-0">
          <StatItem title="Total Orders" value="9526" icon="fa fa-shopping-cart" progressWidth="55%" percentage="+4.2%" />
          <StatItem title="Total Revenue" value="8323" icon="fa fa-usd" progressWidth="55%" percentage="+1.2%" />
          <StatItem title="Visitors" value="6200" icon="fa fa-eye" progressWidth="55%" percentage="+5.2%" />
          <StatItem title="Messages" value="5630" icon="fa fa-envira" progressWidth="55%" percentage="+2.2%" />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ title, value, icon, progressWidth, percentage }) => {
  return (
    <div className="col-12 col-lg-6 col-xl-3 border-light">
      <div className="card-body">
        <h5 className="text-white mb-0">
          {value} <span className="float-right"><i className={icon}></i></span>
        </h5>
        <div className="progress my-3" style={{ height: '3px' }}>
          <div className="progress-bar" style={{ width: progressWidth }}></div>
        </div>
        <p className="mb-0 text-white small-font">
          {title} <span className="float-right">{percentage} <i className="zmdi zmdi-long-arrow-up"></i></span>
        </p>
      </div>
    </div>
  );
};

