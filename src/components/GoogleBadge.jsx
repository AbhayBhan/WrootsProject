import Image from "next/image";
import GPlayBadge from "@/assets/gplaybadge.svg";

const GoogleBadge = () => {
  return (
    <>
      <a href="https://play.google.com/store/apps/details?id=com.wrootsglobal.wrae&hl=en_IN&gl=US">
        <Image alt="googleBanner" src={GPlayBadge} width={150} height={35} />
      </a>
    </>
  );
};

export default GoogleBadge;
