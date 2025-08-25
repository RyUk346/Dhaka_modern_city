"use client";
import { motion } from "framer-motion";

export default function Search() {
  return (
    <>
      <div className="w-full h-svh bg-[url('/hero.jpg')] bg-cover bg-center flex justify-center items-center text-[#1F4B43] font-roboto">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-4 bg-[rgba(179,237,161,0.7)] p-6 md:p-10 rounded-xl shadow-lg text-[#1F4B43] font-roboto">
            <div className="w-[210px] h-[40px] border border-[#1F4B43] rounded-[40px] flex justify-center items-center">
              <h1 className="text-center font-medium text-[13px]">
                LET US GUIDE YOUR HOME
              </h1>
            </div>
            <h1 className="text-center text-[16px] leading-[30px]">
              We’ve more than 25,000 apartments, place & plot.
            </h1>
            <h1 className="text-[36px] md:text-[60px] font-medium leading-[40px] md:leading-[60px] text-center">
              Find Your Perfect Home
            </h1>

            {/* Search bar with icon */}
            <div className="relative mt-6 w-full flex justify-center transition-all duration-700 ease-in-out transform animate-slide-in">
              <input
                className="md:w-[690px] w-[360px] px-6 h-[72px] border rounded-[60px] border-[#EBEBEB] pr-20 shadow-lg bg-white"
                type="text"
                placeholder="Enter Name, Keywords..."
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E7C873] w-[60px] h-[60px] flex justify-center items-center rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    d="M17 17L21 21"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <h1 className="text-[16px] mt-4">Explore all things property</h1>

            {/* Buttons */}
            <div className="flex gap-2 flex-wrap justify-center">
              {["All Properties", "For Sale", "For Rent"].map((item, index) => (
                <div
                  key={index}
                  className="w-[115px] h-[33px] border rounded-[33px] border-[#EBEBEB] flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer"
                >
                  <h1 className="text-[13px]">{item}</h1>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
