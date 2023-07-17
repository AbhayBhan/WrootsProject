import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLink,
} from "react-icons/fa";
import GoogleBadge from "./GoogleBadge";
import AppleBadge from "./AppleBadge";

const SharingCard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 py-4 rounded-lg w-64 bg-blue-50">
      <div className="flex flex-col space-y-1 items-center">
        <h1 className="text-lg font-bold">Earn More with Referrals</h1>
        <h1>Download Wrae App Now</h1>
      </div>
      <GoogleBadge />
      <AppleBadge />
      <div className="flex flex-col items-center space-y-2 w-full">
        <h1 className="font-medium">Share this job :</h1>
        <div className="flex flex-row justify-between w-[60%]">
          <FaFacebook size={20} color="blue" />
          <FaInstagram size={20} color="blue" />
          <FaLinkedin size={20} color="blue" />
          <FaTwitter size={20} color="blue" />
          <FaLink size={20} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default SharingCard;
