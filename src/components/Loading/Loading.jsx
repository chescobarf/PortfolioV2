import React from "react";

const Loading = () => {
  return (
    <div
      class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
