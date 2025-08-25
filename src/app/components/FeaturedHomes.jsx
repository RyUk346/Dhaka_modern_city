"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { properties } from "../data/properties";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBed, FaBath } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";

export default function FeaturedHomes() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const CustomDot = ({ onClick, index, active }) => (
    <button
      className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
        active ? "bg-red-600 w-6 h-3 rounded-full" : "bg-gray-300"
      }`}
      onClick={onClick}
    />
  );

  return (
    <div className="relative bg-[#F6F8FA] pb-16 md:px-24 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-300 rounded-full top-[-50px] left-[-50px] opacity-40 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-yellow-300 rounded-full top-[200px] right-[-100px] opacity-40 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-green-300 rounded-full bottom-[-150px] left-[50%] opacity-30 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Title */}
      <div className="flex items-center justify-center pt-[120px] mb-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[40px] font-semibold"
        >
          Homes For You
        </motion.h1>
      </div>

      {/* Carousel */}
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        customDot={<CustomDot />}
        className="pb-8 relative z-10"
      >
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className="p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative overflow-hidden bg-white shadow-lg p-2 rounded-2xl">
              {/* Property Image */}
              <img
                src={property.image}
                alt={property.name}
                className="w-full max-h-[400px] object-cover rounded-2xl"
              />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex space-x-2">
                {property.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-[33px] text-sm font-medium ${
                      tag === "Featured"
                        ? "bg-[#E7C873] text-black"
                        : "bg-[#1F4B43] text-white"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Property Info */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-[14px] md:text-[19px] font-medium">
                    {property.name}
                  </h1>
                  <p className="text-[#EB664E] text-[14px] md:text-[19px] font-semibold">
                    {property.price}
                  </p>
                </div>
                <p className="flex items-center text-gray-600 text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1 text-red-500" />
                  {property.address}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-700 text-sm mt-2">
                  <span className="flex gap-1 items-center">
                    <FaBed className="text-green-500" /> {property.bed} Bed
                  </span>
                  <span className="flex gap-1 items-center">
                    <FaBath className="text-blue-500" /> {property.bath} Bath
                  </span>
                  <span className="flex gap-1 items-center">
                    <MdPhotoSizeSelectSmall className="text-yellow-500" />{" "}
                    {property.sqft} Sqft
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}
