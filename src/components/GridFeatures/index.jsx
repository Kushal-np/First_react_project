// components/MotherboardCard.jsx
import image from "../../assets/image.jpeg";
import React from "react";

const MotherboardCard = ({ title, details, moreDetails, imageUrl }) => {
  return (
    <div className="relative overflow-hidden bg-[#0F1117] rounded-3xl p-8 sm:p-10 border border-transparent group shadow-[0_0_40px_rgba(56,189,248,0.15)] w-full max-w-[95%] sm:max-w-[500px] lg:max-w-[720px] hover:shadow-[0_0_60px_rgba(56,189,248,0.4)] transition-all duration-500 ease-in-out hover:border-[#38BDF8]">
      
      <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#38BDF8]/10 before:via-transparent before:to-[#38BDF8]/5 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 rounded-3xl z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
        <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
          <img
            src={imageUrl}
            alt="Feature Visual"
            className="w-full h-auto object-contain drop-shadow-md rounded-lg"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <span className="fonty text-sm sm:text-base px-4 py-2 bg-[#1E293B] text-[#38BDF8] rounded-full inline-block mb-4 shadow-inner">
            {title}
          </span>

          <h3 className="fonty text-[#F1F5F9] text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            {details}
          </h3>

          <p className="fonty text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            {moreDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotherboardCard;