import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
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
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={25} />
          </FacebookShareButton>
          <WhatsappShareButton url={window.location.href}>
            <WhatsappIcon size={25} />
          </WhatsappShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={25} />
          </TwitterShareButton>
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon size={25} />
          </LinkedinShareButton>
          <EmailShareButton url={window.location.href}>
            <EmailIcon size={25} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default SharingCard;
