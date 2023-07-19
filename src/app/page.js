"use client";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getJobDetails } from "@/hooks/Job/Job";
import BonusCard from "@/components/BonusCard";
import ContactCard from "@/components/ContactCard";
import JobHeadCard from "@/components/JobHeadCard";
import SharingCard from "@/components/SharingCard";
import ModalBlank from "@/components/ModalBlank";
import VerificationPage from "@/partials/VerificationPage";
import ReferralPage from "@/partials/ReferralPage";
import { ReferSingle } from "@/hooks/Refer/Refer";
import VerifiedComponent from "@/components/VerifiedComponent";

export default function Home({ roleId = 420 }) {
  const [verified, setVerified] = useState(false);

  const [loading, setLoading] = useState(true);
  const [jobDetails, setJobDetails] = useState({});

  const [applyModal, setApplyModal] = useState(false);
  const [referModal, setReferModal] = useState(false);

  const jobFetchSuccess = ({ data }) => {
    setJobDetails(data);
    setLoading(false);
  };

  const { data, mutate } = useMutation(getJobDetails, {
    onSuccess: jobFetchSuccess,
  });

  const { mutate: jobMutate } = useMutation(ReferSingle);

  const submitJob = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const reqBody = {
      categoryId: jobDetails?.category.id,
      userId: user?.id,
      roleId: roleId,
      hiringCompanyId: jobDetails?.company.id,
      name: user?.name || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber,
    };

    jobMutate(reqBody);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      setVerified(true);
    }
    mutate(roleId);
  }, []);
  return (
    <div className="w-full">
      {loading ? (
        <></>
      ) : (
        <div className="flex md:flex-row flex-col justify-center mx-auto py-4 px-2 gap-12">
          <div className="flex flex-col space-y-4 md:w-1/3">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-bold text-blue-900">Wroots</h1>
              <div className="flex flex-row space-x-3 mt-1">
                <h1 className="text-sm font-medium">
                  Job ad Updated : 1 day ago
                </h1>
                <h1 className="text-sm font-medium">Job ID : {data.data.id}</h1>
              </div>
            </div>

            <div className="flex flex-col space-y-2 w-1/2">
              <h1 className="text-xl font-bold">{data.data.name}</h1>
              <h1 className="text-sm font-medium">
                <span className="text-blue-600">
                  {data.data.company.name} -
                </span>
                {data.data.location.map((loc) => {
                  return (
                    <span key={loc.id} className="text-gray-500">
                      {" "}
                      {loc.name},{" "}
                    </span>
                  );
                })}
              </h1>
            </div>

            <div className="border-t-2"></div>

            <JobHeadCard jobDetails={jobDetails} />

            <BonusCard
              referralAmount={jobDetails.referralAmount}
              setReferModal={setReferModal}
            />

            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Job Overview</h1>
              <div
                className="flex flex-col space-y-1"
                dangerouslySetInnerHTML={{ __html: data.data.briefing }}
              />
            </div>

            {/* <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">Responsibilities</h1>
            <div>
              <ul className="list-disc">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ipsum turpis, ornare.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ipsum turpis, ornare.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ipsum turpis, ornare.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ipsum turpis, ornare.
                </li>
              </ul>
            </div>
          </div> */}
          </div>

          {/* Second Section */}
          <div className="flex flex-col space-y-6 items-center">
            <div className="flex flex-col justify-center items-center space-y-3 py-4 rounded-lg w-64 bg-blue-50">
              <h1 className="font-medium">Sounds like a match?</h1>
              <button
                onClick={() => {
                  if (verified) {
                    submitJob();
                    setApplyModal(true);
                  } else {
                    setApplyModal(true);
                  }
                }}
                className="px-4 py-2 bg-green-500 text-white rounded-lg w-3/4"
              >
                Apply Now
              </button>
              <button
                onClick={() => setReferModal(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg w-3/4"
              >
                Refer & Earn Upto 90,000
              </button>
            </div>

            <SharingCard />

            <ContactCard />
          </div>
        </div>
      )}
      <ModalBlank
        openModal={applyModal}
        setOpenModal={setApplyModal}
        title={"Apply For Job"}
      >
        {verified ? (
          <VerifiedComponent />
        ) : (
          <VerificationPage setVerified={setVerified} submitJob={submitJob} />
        )}
      </ModalBlank>
      <ModalBlank
        openModal={referModal}
        setOpenModal={setReferModal}
        title={"Refer more People"}
      >
        {verified ? (
          <ReferralPage
            referralAmount={jobDetails.referralAmount}
            jobDetails={jobDetails}
            roleId={roleId}
          />
        ) : (
          <VerificationPage setVerified={setVerified} />
        )}
      </ModalBlank>
    </div>
  );
}
