"use client";
import { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveMobileDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  const toggleDropdown = (item) => {
    if (activeMobileDropdown === item) {
      setActiveMobileDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(null);
      setActiveMobileDropdown(item);
    }
  };

  const toggleSubDropdown = (section) =>
    setActiveSubDropdown((prev) => (prev === section ? null : section));

  const navItems = ["Buy", "Rent", "Sell", "Home Loans"];

  const dropdownItems = {
    Buy: {
      "Homes for Sale": [
        "Ready Flat",
        "New Construction",
        "Commercial units",
        "Open Houses",
        "Plot Booking",
        "Budget Homes",
        "Premium Homes",
        "All for sale Properties",
      ],
      Resources: [
        "Home Buying Guide",
        "Down Payment Assistance",
        "Home Interrior",
      ],
    },
    Rent: {
      "Discover Rental": [
        "Aparments for rent",
        "Houses for Rent",
        "Furnished Homes",
        "Bachelor Friendly Homes",
      ],
      Resources: [
        "Rent with Dhaka Modern City",
        "Renters Insurance",
        "Affordability Calculator",
        "Rent Guide",
      ],
    },
    Sell: {
      Resources: ["Explore your options", "Sellers guide"],
      "Selling options": ["Find an agent", "Rates and Trend"],
    },
    "Home Loans": {
      "Apply Now": ["Home Loans", "Balance Transfer", "Loan Agains Property"],
      Resources: [
        "Home Loan Eligibility",
        "Home Loan Interest Rate",
        "Home Loan Balance Transfer",
      ],
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveMobileDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="w-full flex justify-between items-center px-4 md:px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="w-36 md:w-52" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex h-16">
          {navItems.map((item) => (
            <motion.div
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative flex items-center h-full"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="#"
                className={`flex items-center relative h-full px-6 text-lg font-medium transition-all duration-300 ${
                  hoveredItem === item
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {item}
              </a>
              {hoveredItem === item && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-black"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Right: Search + Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-28 lg:w-60 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
          <FaUser className="cursor-pointer text-xl" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Dropdown */}
      {hoveredItem && dropdownItems[hoveredItem] && (
        <motion.div
          onMouseEnter={() => setHoveredItem(hoveredItem)}
          onMouseLeave={() => setHoveredItem(null)}
          className="absolute left-0 top-full w-full bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)] py-6 z-40 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute w-60 h-60 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -top-10 -left-20"
            animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-60 h-60 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -top-10 right-0"
            animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 bottom-0 left-1/4"
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="max-w-7xl mx-auto grid grid-flow-col auto-cols-fr gap-6 divide-x divide-gray-300 px-6">
            {Object.entries(dropdownItems[hoveredItem]).map(
              ([section, items]) => (
                <div key={section}>
                  <h4 className="font-bold text-xl mb-2">{section}</h4>
                  <ul className="grid grid-flow-col auto-rows-max grid-rows-4 gap-y-2 text-lg text-gray-600">
                    {items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <a href="#">{item}</a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </motion.div>
      )}

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-black/30"
            onClick={() => setIsMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-3/4 h-full z-40 bg-white shadow-lg overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full">
              <img
                src="/logo.png"
                alt="Menu Top"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="px-4 pb-4 pt-2 space-y-2">
              {navItems.map((item) => {
                const hasDropdown = dropdownItems[item];
                const isActive = activeMobileDropdown === item;

                return (
                  <div key={item}>
                    <button
                      onClick={() => toggleDropdown(item)}
                      className={`flex justify-between items-center w-full py-2 px-2 rounded text-left transition-all duration-300 ${
                        isActive ? "bg-[#E61A1A] text-white" : "text-gray-700"
                      }`}
                    >
                      {item}
                      {hasDropdown &&
                        (isActive ? <FaChevronDown /> : <FaChevronRight />)}
                    </button>

                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {isActive &&
                        hasDropdown &&
                        Object.entries(dropdownItems[item]).map(
                          ([section, items]) => {
                            const isSubActive = activeSubDropdown === section;
                            return (
                              <div key={section} className="pl-4">
                                <button
                                  onClick={() => toggleSubDropdown(section)}
                                  className={`flex justify-between items-center w-full py-2 px-2 rounded text-left transition-all duration-300 ${
                                    isSubActive
                                      ? "bg-[#E61A1A] text-white"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {section}
                                  {isSubActive ? (
                                    <FaChevronDown />
                                  ) : (
                                    <FaChevronRight />
                                  )}
                                </button>

                                <motion.ul
                                  className="pl-4 pt-2 space-y-1 text-sm text-gray-700 overflow-hidden"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{
                                    height: isSubActive ? "auto" : 0,
                                    opacity: isSubActive ? 1 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  {isSubActive &&
                                    items.map((subItem) => (
                                      <li key={subItem}>
                                        <a href="#">{subItem}</a>
                                      </li>
                                    ))}
                                </motion.ul>
                              </div>
                            );
                          }
                        )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
