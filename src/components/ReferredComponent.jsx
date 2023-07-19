import Image from "next/image";
import refV from "@/assets/refV.png";
import GoogleBadge from "./GoogleBadge";
import AppleBadge from "./AppleBadge";
import { FaUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ReferredComponent = ({referralData}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image src={refV} alt="referred_success" />
      <div className="flex flex-col space-y-1 items-center">
        <h1 className="font-bold text-xl">Hurray! Referrals Submitted</h1>
        <h1 className="text-sm text-center">
          All your phone numbers has been validated and our team will reach out
          to them shortly and update the status
        </h1>
      </div>
      <div className="flex flex-row justify-between space-x-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl text-gray-800">{referralData.acceptedCandidates + referralData.rejectedCandidates}</h1>
          <div className="flex space-x-1">
            <FaUpload />
            <h1 className="text-sm text-gray-800">Referrals Submitted</h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl text-green-800">{referralData.acceptedCandidates}</h1>
          <div className="flex space-x-1">
            <FaCheckCircle color="green" />
            <h1 className="text-sm text-green-800">Referrals Accepted</h1>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl text-red-800">{referralData.rejectedCandidates}</h1>
          <div className="flex space-x-1">
            <FaTimesCircle color="red" />
            <h1 className="text-sm text-red-800">Referrals Rejected</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1 items-center">
        <h1 className="text-md text-center">
          Download our App Now to refer more jobs and explore more jobs to refer
          and earn.
        </h1>
      </div>
      <div className="flex justify-center gap-4">
        <GoogleBadge />
        <AppleBadge />
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <h1 className="text-xs text-gray-400">Need Help?</h1>
        <h1 className="text-xs text-gray-400">
          Reach us out below and Our team will help assist with all queries.
        </h1>
        <h1 className="text-xs text-gray-400">+91 99821-23124</h1>
        <h1 className="text-xs text-gray-400">connect@wrootsglobal.com</h1>
      </div>
    </div>
  );
};

export default ReferredComponent;
