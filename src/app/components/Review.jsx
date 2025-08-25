"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/XrGewYCf-3A",
  "https://www.youtube.com/embed/5LjDV4CIALw",
  "https://www.youtube.com/embed/r4W0cgimkYQ",
  "https://www.youtube.com/embed/ScMzIvxBSi4",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRefs = useRef([]);

  // Auto slide logic
  useEffect(() => {
    if (!isHovered && !isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isPlaying]);

  // Detect when a video starts playing (YouTube API workaround)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === "string") {
        if (event.data.includes("playing")) setIsPlaying(true);
        if (event.data.includes("paused")) setIsPlaying(false);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative overflow-hidden py-12">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-120 h-120 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -top-20 -left-20"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-120 h-120 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-1/3 right-0"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-0 left-1/4"
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Section title */}
      <div className="relative z-10 flex flex-col justify-center items-center mt-12">
        <h1 className="text-[40px] font-medium text-white">
          What People Say About Us
        </h1>
      </div>

      {/* Video slider */}
      <div
        className="relative z-10 w-full flex flex-col items-center overflow-hidden mt-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-center items-center gap-4">
          {videos.map((video, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              index === (currentIndex - 1 + videos.length) % videos.length;
            const isNext = index === (currentIndex + 1) % videos.length;

            return (
              <motion.div
                key={index}
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-110 opacity-100"
                    : isPrev || isNext
                    ? "scale-90 opacity-70"
                    : "hidden"
                }`}
                style={{ width: isActive ? "460px" : "320px" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <iframe
                  ref={(el) => (iframeRefs.current[index] = el)}
                  width="100%"
                  height={isActive ? "260" : "180"}
                  src={`${video}?enablejsapi=1`}
                  title={`Video ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8 z-10">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-green-500 w-[24px]" : "bg-red-200"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <div className="relative z-10 mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4">
          {/* First Card */}
          <motion.div
            className="w-full md:max-w-[685px] bg-[#F9F9F9] flex flex-col sm:flex-row justify-between rounded-[16px] p-6 shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="sm:max-w-[380px] space-y-4 mb-4 sm:mb-0">
              <h1 className="font-medium text-[22px] sm:text-[26px] leading-snug">
                Looking for the new home?
              </h1>
              <p className="text-sm sm:text-base">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className="w-[162px] h-[54px] bg-green-600 rounded-xl text-white flex justify-center items-center gap-4 hover:bg-red-500 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <div className="flex justify-center sm:justify-end items-end">
              <img
                src="/home.png"
                alt=""
                className="w-[100px] h-[100px] sm:w-[130px] sm:h-[131px]"
              />
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div
            className="w-full md:max-w-[685px] bg-[#FFF8F6] flex flex-col sm:flex-row justify-between rounded-[16px] p-6 shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="sm:max-w-[380px] space-y-4 mb-4 sm:mb-0">
              <h1 className="font-medium text-[22px] sm:text-[26px] leading-snug">
                Want to sell your home?
              </h1>
              <p className="text-sm sm:text-base">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className="w-[162px] h-[54px] bg-green-600 rounded-xl text-white flex justify-center items-center gap-4 hover:bg-red-500 transition-colors duration-300">
                Get Started
              </button>
            </div>
            <div className="flex justify-center sm:justify-end items-end">
              <img
                src="/home1.png"
                alt=""
                className="w-[100px] h-[100px] sm:w-[130px] sm:h-[131px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
