"use client";
import { useEffect, useState, useRef } from "react";

const videos = [
  "https://www.youtube.com/embed/XrGewYCf-3A",
  "https://www.youtube.com/embed/5LjDV4CIALw",
  "https://www.youtube.com/embed/r4W0cgimkYQ",
  "https://www.youtube.com/embed/ScMzIvxBSi4",
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
];

export default function VideoSlider() {
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

  // Detect when a video starts playing (YouTube API workaround using focus)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && typeof event.data === "string") {
        if (event.data.includes("playing")) {
          setIsPlaying(true);
        }
        if (event.data.includes("paused")) {
          setIsPlaying(false);
        }
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-12 py-12">
        <h1 className="text-[40px] font-medium">What People Say About Us</h1>
      </div>
      <div
        className="w-full flex flex-col items-center overflow-hidden"
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
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isActive
                    ? "scale-110 opacity-100"
                    : isPrev || isNext
                    ? "scale-90 opacity-70"
                    : "hidden"
                }`}
                style={{ width: isActive ? "460px" : "320px" }}
              >
                <iframe
                  ref={(el) => (iframeRefs.current[index] = el)}
                  width="100%"
                  height={isActive ? "260" : "180"}
                  src={`${video}?enablejsapi=1`} // Added for API support
                  title={`Video ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4">
        {/* First Card */}
        <div className="w-full md:max-w-[685px] bg-[#F9F9F9] flex flex-col sm:flex-row justify-between rounded-[16px] p-6">
          <div className="sm:max-w-[380px] space-y-4 mb-4 sm:mb-0">
            <h1 className="font-medium text-[22px] sm:text-[26px] leading-snug">
              Looking for the new home?
            </h1>
            <p className="text-sm sm:text-base">
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </p>
            <button className="w-[162px] h-[54px] bg-[#1F4B43] rounded-xl text-white flex justify-center items-center gap-4">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M20.0001 18L20.0001 6"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16.0001 11.9995L4.00012 11.9995"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.0002 8C12.0002 8 16.0001 10.946 16.0001 12C16.0001 13.0541 12.0001 16 12.0001 16"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center sm:justify-end items-end">
            <img
              src="/home.png"
              alt=""
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[131px]"
            />
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full md:max-w-[685px] bg-[#FFF8F6] flex flex-col sm:flex-row justify-between rounded-[16px] p-6">
          <div className="sm:max-w-[380px] space-y-4 mb-4 sm:mb-0">
            <h1 className="font-medium text-[22px] sm:text-[26px] leading-snug">
              Want to sell your home?
            </h1>
            <p className="text-sm sm:text-base">
              10 new offers every day. 350 offers on site, trusted by a
              community of thousands of users.
            </p>
            <button className="w-[162px] h-[54px] bg-[#1F4B43] rounded-xl text-white flex justify-center items-center gap-4">
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M20.0001 18L20.0001 6"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M16.0001 11.9995L4.00012 11.9995"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12.0002 8C12.0002 8 16.0001 10.946 16.0001 12C16.0001 13.0541 12.0001 16 12.0001 16"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-center sm:justify-end items-end">
            <img
              src="/home1.png"
              alt=""
              className="w-[100px] h-[100px] sm:w-[130px] sm:h-[131px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
