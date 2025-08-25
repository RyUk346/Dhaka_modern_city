"use client";
import { motion } from "framer-motion";

export default function Subscription() {
  return (
    <div className="relative w-full min-h-[500px] flex justify-center items-center text-white px-4 overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-green-500">
      {/* ✅ Animated Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{
          x: [50, -50, 50],
          y: [0, 50, -50],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* ✅ Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 space-y-6 md:space-y-10 flex flex-col justify-center items-center text-center"
      >
        {/* Animated Icon */}
        <motion.img
          src="/mail.png"
          alt="Mail Icon"
          className="w-[80px] h-[80px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
        />

        {/* Heading */}
        <h1 className="text-[28px] md:text-[40px] font-extrabold bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
          Stay Up to Date
        </h1>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[28px] max-w-[500px] text-white/90">
          Subscribe to our newsletter to receive our weekly feed.
        </p>

        {/* Input and Button */}
        <motion.div
          className="relative w-full max-w-[570px] h-[50px] md:h-[60px] flex"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Your e-mail"
            className="w-full h-full rounded-[60px] bg-white/20 px-6 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-6 md:px-8 bg-gradient-to-r from-green-700 to-red-500 hover:from-red-500 hover:to-green-700 text-white rounded-r-[60px] flex items-center gap-2 cursor-pointer transition-all duration-300"
          >
            <span className="font-semibold">Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
            >
              <path
                d="M9 6C9 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
