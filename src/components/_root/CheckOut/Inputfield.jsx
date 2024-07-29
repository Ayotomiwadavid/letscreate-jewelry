import React from "react";

const Inputfield = ({inputValue, inoutName, handleInputChange}) => {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      name={inoutName}
      placeholder="Akorede"
      className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
      required
    />
  );
};

export default Inputfield;
