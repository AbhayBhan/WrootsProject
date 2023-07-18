"use client";

import { useState } from "react";
import { ReferMultiple } from "@/hooks/Refer/Refer";
import { useMutation } from "react-query";
import ReferredComponent from "@/components/ReferredComponent";

const ReferralPage = ({ jobDetails , referralAmount, roleId }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [referred, setReferred] = useState(false);

  const [referrals, setReferrals] = useState([{name : '', phoneNumber : '', email : ''}]);

  const referSuccess = (data) => {
    console.log(data);
    setReferred(true);
  }
  
  const {mutate : referMutate} = useMutation(ReferMultiple, {
    onSuccess : referSuccess
  });

  const handleNameChange = (index, event) => {
    const newReferrals = [...referrals];
    newReferrals[index].name = event.target.value;
    setReferrals(newReferrals);
  };

  const handlePhoneNumberChange = (index, event) => {
    const newReferrals = [...referrals];
    newReferrals[index].phoneNumber = event.target.value;
    setReferrals(newReferrals);
  };

  const handleAddReferral = () => {
    setReferrals([...referrals, { name: '', phoneNumber: '' , email : ''}]);
  };
  
  const handleDeleteReferral = (index) => {
    const newReferrals = [...referrals];
    newReferrals.splice(index, 1);
    setReferrals(newReferrals);
  };

  const submitReferrals = () => {
    const reqBody = {
      categoryId : jobDetails?.category?.id,
      roleId : roleId,
      hiringCompanyId : jobDetails?.company.id,
      candidates : referrals
    }

    referMutate(reqBody);
  }

  return (
    <>
    {referred ? <ReferredComponent /> : 
    <div className="flex flex-col items-start space-y-5">
      <div className="block space-y-2">
        <h1 className="text-2xl font-bold">Refer Candidates</h1>
        <h1 className="text-sm">
          You'll receive every candidate updates on +91 {user?.phoneNumber}
        </h1>
      </div>
      <div className="block space-y-2">
        <h1 className="text-sm">
          Job Reffering for :{" "}
          <strong>
            {jobDetails.name}- {jobDetails.company.name}
          </strong>
        </h1>
        <h1 className="text-sm">
          Referral Amount : <strong>Rs {referralAmount}</strong>
        </h1>
      </div>
      <div className="block space-y-3">
        <h1 className="text-lg font-bold">Your List</h1>
        {referrals.map((referral, index) => (
          <div className="flex flex-row gap-2 justify-between" key={index}>
            <input
              type="text"
              placeholder="Name"
              className="w-1/3 border px-2 py-1 rounded-lg"
              value={referral.name}
              onChange={(event) => handleNameChange(index, event)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-1/3 border px-2 py-1 rounded-lg"
              maxLength={10}
              value={referral.phoneNumber}
              onChange={(event) => handlePhoneNumberChange(index, event)}
            />
            <button className="px-2 py-1 bg-red-500 text-white rounded-lg" onClick={() => handleDeleteReferral(index)}>Delete</button>
          </div>
        ))}
        <button className="px-2 py-1 bg-green-500 text-white rounded-lg" onClick={handleAddReferral}>Add</button>
      </div>
      <div className="block mx-auto">
        <button onClick={submitReferrals} className="px-4 py-2 bg-blue-700 text-white rounded-lg text-lg" >Submit Referrals</button>
      </div>
    </div>}
    </>
  );
};

export default ReferralPage;
