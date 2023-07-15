"use client";

import { useState } from "react";
import Image from "next/image";
import MobV from "@/assets/mobv.png";
import MobVCheck from "@/assets/mobvcheck.png";
import GPlayBadge from "@/assets/gplaybadge.svg";
import AStoreBadge from "@/assets/astorebadge.svg";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import { RequestOTP , VerifyOTP } from "@/hooks/Verification/Verification";
import { useMutation } from "react-query";

const VerificationPage = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verifyPage, setVerifyPage] = useState(false);
  const [verifiedPage, setVerifiedPage] = useState(false);

  const otpSuccess = () => {
    setVerifyPage(true);
    console.log("success");
  };

  const verificationSuccess = () => {
    setVerifyPage(false);
    setVerifiedPage(true);
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
      {verifiedPage ? (
        <div className="flex flex-col items-center space-y-4">
          <Image src={MobVCheck} alt="mobile_verified" />
          <div className="flex flex-col space-y-1 items-center">
            <h1 className="font-bold text-xl">Successfully Applied for Job</h1>
            <h1 className="text-sm text-center">
              One of our Recruiters will reach out to you to collect your
              details
            </h1>
          </div>
          <div className="flex flex-col space-y-1 items-center">
            <h1 className="font-bold text-xl">
              Refer More candidates for this Job
            </h1>
            <h1 className="text-md text-center">
              Download our App Now to refer more jobs and explore more jobs to
              refer and earn.
            </h1>
          </div>
          <div className="flex justify-center gap-4">
            <Image
              alt="googleBanner"
              src={GPlayBadge}
              width={150}
              height={35}
            />
            <Image
              alt="appleBanner"
              src={AStoreBadge}
              width={150}
              height={35}
            />
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
      ) : verifyPage ? (
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
              className="text-blue-500 text-sm font-medium"
            >
              Resend Code
            </button>
          </div>
          <div className="block mx-auto">
            <button
              disabled={otp.length !== 6}
              onClick={verifyOTP}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Verify
            </button>
            {verifyLoading ? <h1>Loading...</h1> : <></>}
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
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Get OTP
            </button>
            {otpLoading ? <h1>Loading...</h1> : <></>}
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationPage;
