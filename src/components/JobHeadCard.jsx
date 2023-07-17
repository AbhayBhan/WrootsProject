import React from "react";

const JobHeadCard = ({jobDetails}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">EXPERIENCE</h1>
        <h1 className="text-sm font-bold">{jobDetails.minExperience}-{jobDetails.maxExperience} Years</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">POSITIONS OPEN</h1>
        <h1 className="text-sm font-bold text-center">{jobDetails.noOfPositions}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">EMPLOYMENT</h1>
        <h1 className="text-sm font-bold">Full-Time</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xs font-bold text-gray-500">SALARY</h1>
        <h1 className="text-sm font-bold">{jobDetails.minSalary/1000}k-{jobDetails.maxSalary/1000}k</h1>
      </div>
    </div>
  );
};

export default JobHeadCard;
