import React from "react";
import { FaPhoneSquareAlt, FaAt } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="flex flex-col justify-center px-2 space-y-3 py-4 rounded-lg w-64 bg-blue-50">
      <h1 className="font-medium">Need Help? Contact Us</h1>
      <div className="flex flex-row space-x-3">
        <FaPhoneSquareAlt size={25} />
        <h1>+91 97380 70069</h1>
      </div>
      <div className="flex flex-row space-x-3">
        <FaAt size={25} />
        <h1>connect@wrootsglobal.com</h1>
      </div>
    </div>
  );
};

export default ContactCard;
