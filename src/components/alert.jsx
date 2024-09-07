import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 flex justify-center">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-blue-500"
        } p-4 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-3 py-1 font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
