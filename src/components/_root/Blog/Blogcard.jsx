import React from "react";
import RealVsFake from "../../../assets/BlogImages/RealVsFake.webp";

const Blogcard = ({blogImage, blogDescription, BlogTitle}) => {
  return (
    <aside className="w-[350px] h-[450px] transition-all duration-500 hover:shadow-xl rounded-md flex flex-col items-center justify-start gap-4">
      <div className="w-full h-[200px] flex items-center justify-center">
        <img
          src={blogImage}
          alt="Differentiate between real and fake diamond"
          className="w-full h-full"
        />
      </div>
      <h1 className="font-bold text-xl capitalize text-[#191919] py-1 px-2">
        {BlogTitle}
      </h1>
      <p className="overflow-hidden text-ellipsis h-[100px] px-2 ">{blogDescription}</p>
      <div className="w-full flex items-center justify-start px-2 py-3">
        <button className="capitalize text-center h-[45px] w-[200px] rounded-lg flex items-center justify-center text-white bg-[#000]">
          Continue Reading
        </button>
      </div>
    </aside>
  );
};

export default Blogcard;
