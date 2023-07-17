import AStoreBadge from "@/assets/astorebadge.svg";
import Image from "next/image";

const AppleBadge = () => {
  return (
    <a href="https://apps.apple.com/in/app/wrae/id1586509054">
      <Image alt="appleBanner" src={AStoreBadge} width={150} height={35} />
    </a>
  );
};

export default AppleBadge;
