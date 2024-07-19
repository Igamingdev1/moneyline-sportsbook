import React, { useState, useEffect } from "react";
import { CloseIcon, AngleRightIcon } from "../Icons";

const SubscribeForm: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const onClose = () => {
    setShow(!show);
  };

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, [])

  return (
    <div
      className={`transform transition duration-150 ease-in-out grid grid-cols-1 md:grid-cols-2 gap-4 p-2 fixed bottom-0 bg-gray-300 w-full ${
        show ? "" : "translate-y-20"
      }`}
    >
      <div className="hidden lg:block mt-5">
        <span className="text-gray-700 border-r-2 border-solid border-gray-800 font-bold px-2">
          Sign up for newletters
        </span>
        <span className="text-gray-700 px-2">
          Get access to predictions in your inbox
        </span>
      </div>
      <div className="flex items-center justify-center">
        <form className="w-full max-w-sm mr-4">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your work email"
            />
            <button
              className="flex flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Subscribe
              <AngleRightIcon width={20} height={20}></AngleRightIcon>
            </button>
          </div>
        </form>
        <div onClick={() => onClose()}>
          <CloseIcon className="cursor-pointer" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
