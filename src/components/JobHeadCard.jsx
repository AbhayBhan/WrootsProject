import React from "react";

const JobHeadCard = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">EXPERIENCE</h1>
        <h1 className="text-sm font-bold">3-5 Years</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">SENIORITY LEVEL</h1>
        <h1 className="text-sm font-bold">Medium Level</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">EMPLOYMENT</h1>
        <h1 className="text-sm font-bold">Full-Time</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">SALARY</h1>
        <h1 className="text-sm font-bold">$90-110k</h1>
      </div>
    </div>
  );
};

export default JobHeadCard;
