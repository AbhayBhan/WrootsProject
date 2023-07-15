import React from "react";

const ModalBlank = ({ openModal, setOpenModal, children, title }) => {
  
  return (
    <>
      {openModal && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-50 flex justify-center items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="p-4 rounded shadow bg-white  w-full max-w-lg "
          >
            {/* header */}
            <div className="flex items-center justify-between ">
              <div className="font-semibold text-slate-800">{title}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenModal(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-60 hover:opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr className="my-2" />
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalBlank;
