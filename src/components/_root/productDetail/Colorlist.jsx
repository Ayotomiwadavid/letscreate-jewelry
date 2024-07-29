import React, { useState } from "react";

const ColorList = ({ colors,  onColorSelect}) => {


  return (
    <div className="flex gap-2">
      {colors.map((colorObj, index) => {
        const [colorName, colorValue] = Object.entries(colorObj)[0];
        console.log(colorObj);
        let styleJs = {
          padding: "15px 15px",
          borderRadius: "50%",
          cursor: "pointer",
          background: colorValue,
        };
        return (
            <div
          key={index}
          id={index}
          className=""
          style={styleJs}
          onClick={() => onColorSelect(colorName)}
        ></div>
        );
      })}
    </div>
  );
};

export default ColorList;
