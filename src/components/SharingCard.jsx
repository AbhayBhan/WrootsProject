import React from "react";
import Image from "next/image";
import GPlayBadge from "@/assets/gplaybadge.svg";
import AStoreBadge from "@/assets/astorebadge.svg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLink,
} from "react-icons/fa";

const SharingCard = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-3 py-4 rounded-lg w-64 bg-blue-50">
      <div className="flex flex-col space-y-1 items-center">
        <h1 className="text-lg font-bold">Earn More with Referrals</h1>
        <h1>Download Wrae App Now</h1>
      </div>
      <Image alt="googleBanner" src={GPlayBadge} width={150} height={35} />
      <Image alt="appleBanner" src={AStoreBadge} width={150} height={35} />
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
