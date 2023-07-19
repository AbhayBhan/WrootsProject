"use client";

import { useState } from "react";
import Image from "next/image";
import MobV from "@/assets/mobv.png";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import { RequestOTP , VerifyOTP } from "@/hooks/Verification/Verification";
import { useMutation } from "react-query";
import Loader from "@/components/Loader";

const VerificationPage = ({setVerified,submitJob}) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verifyPage, setVerifyPage] = useState(false);

  const otpSuccess = () => {
    setVerifyPage(true);
  };

  const verificationSuccess = ({data}) => {
    localStorage.setItem('user', JSON.stringify(data));
    try{
      submitJob();
    }catch(e){
      console.log("Referral Component");
    }
    setVerifyPage(false);
    setVerified(true);
  }

  const { mutate, isLoading : otpLoading } = useMutation(RequestOTP, {
    onSuccess: otpSuccess,
  });

  const {mutate : verifyMutate, isLoading : verifyLoading} = useMutation(VerifyOTP, {
    onSuccess : verificationSuccess
  })

  const askOTP = () => {
    const phoneNumber = parseInt(phone.slice(2));
    mutate({ phoneNumber });
  };

  const verifyOTP = () => {
    const phoneNumber = parseInt(phone.slice(2));
    const OTP = parseInt(otp);
    verifyMutate({phoneNumber,otp : OTP});
  }

  return (
    <>
      {verifyPage ? (
        <div className="flex flex-col items-start space-y-5">
          <div className="block space-y-3">
            <h1 className="text-2xl text-blue-900 font-bold">+{phone}</h1>
            <button
              onClick={() => {
                setPhone("");
                setVerifyPage(false);
              }}
              className="text-blue-500 text-md font-medium"
            >
              Change Number
            </button>
          </div>
          <div className="block mx-auto">
            <h1 className="text-md text-center">
              We have sent a confirmation code to your Registered number +
              {phone.slice(0, 2)} {phone.slice(2)}
            </h1>
          </div>
          <div className="block mx-auto">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="flex flex-col items-center mx-auto space-y-2">
            <h1 className="text-sm font-bold">
              Did you not receive verification code?
            </h1>
            <button
              onClick={() => {
                setOtp("");
                askOTP();
              }}
              className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Resend Code
            </button>
          </div>
          <div className="block mx-auto">
            <button
              disabled={otp.length !== 6}
              onClick={verifyOTP}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              {verifyLoading ? <Loader /> : "Verify"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start space-y-4">
          <div className="block mx-auto">
            <Image src={MobV} alt="mobile_verify" />
          </div>
          <div className="flex flex-col items-start space-y-1">
            <h1 className="text-xl font-bold">Let's get you Started</h1>
            <h1 className="text-xl font-medium text-blue-900">
              Please enter your mobile number
            </h1>
            <h1 className="text-sm font-light text-gray-400">
              We will send a 6 digit code to your mobile & email
            </h1>
          </div>
          <div className="block mx-auto">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(e) => setPhone(e)}
            />
          </div>
          <div className="block mx-auto">
            <button
              disabled={phone.length !== 12}
              onClick={askOTP}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              {otpLoading ? <Loader /> : "Get OTP"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationPage;
