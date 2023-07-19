import Image from "next/image";
import NotFoundImg from "@/assets/notfound.svg";

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 space-y-4">
      <Image width={200} src={NotFoundImg} alt="Job_notfound" />
      <div className="w-1/2">
        <h1 className="text-lg font-medium text-center">
          We couldn't Fetch the details of this job, The Link might be broken or
          the job has been closed.
        </h1>
      </div>
    </div>
  );
};

export default ErrorComponent;
