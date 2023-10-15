import React from "react";

function AutoCompleteAddress() {
  return (
    <div>
      <div className="relative">
        <label className="text-gray-400 text-[13px]">My Location</label>
        <input
          type="text"
          className="bg-white p-1 
            border-[1px] w-full 
            rounded-md outline-none
            focus:border-yellow-300 text-[14px]"
        />
      </div>

      <div className="relative">
        <label className="text-gray-400 text-[13px]">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]"
        />
      </div>
    </div>
  );
}

export default AutoCompleteAddress;
