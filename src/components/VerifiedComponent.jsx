import Image from "next/image";
import MobVCheck from "@/assets/mobvcheck.png";
import GPlayBadge from "@/assets/gplaybadge.svg";
import AStoreBadge from "@/assets/astorebadge.svg";

const VerifiedComponent = () => {
  return (
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
  )
}

export default VerifiedComponent