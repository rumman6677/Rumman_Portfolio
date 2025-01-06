import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div className="h-4 bg-[#FF024F] rounded-full" style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;