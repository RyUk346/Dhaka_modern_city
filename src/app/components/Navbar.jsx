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
      <div className="w-full flex justify-between items-center px-2 md:px-4 lg:px-6 py-4">
        {/* Left: Logo and Desktop Nav */}
        <div className="flex items-center space-x-6">
          <a href="/">
            <img src="/logo.png" className="max-w-[200px]"></img>
          </a>
          <nav className="hidden md:flex md:space-x-1.5 lg:space-x-6 whitespace-nowrap">
            {navItems.map((item) => (
              <div
                key={item}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href="#"
                  className="text-gray-700 hover:text-black text-2xl py-2 px-3 block"
                >
                  {item}
                </a>
              </div>
            ))}
          </nav>
        </div>

        {/* Right: Search + Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <FaSearch />
          <FaUser />
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Dropdown */}
      {(hoveredItem === "Buy" ||
        hoveredItem === "Rent" ||
        hoveredItem === "Sell" ||
        hoveredItem === "Home Loans") && (
        <div
          onMouseEnter={() => setHoveredItem(hoveredItem)}
          onMouseLeave={() => setHoveredItem(null)}
          className="absolute left-0 top-full w-full bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)] py-6 z-40 hidden md:block"
        >
          <div className="max-w-7xl mx-auto grid grid-flow-col auto-cols-fr gap-6 divide-x divide-gray-300 px-6">
            {hoveredItem &&
              Object.entries(dropdownItems[hoveredItem]).map(
                ([section, items]) => (
                  <div key={section}>
                    <h4 className="font-bold text-xl mb-2">{section}</h4>
                    <ul className="grid grid-flow-col auto-rows-max grid-rows-4 gap-y-2 text-lg text-gray-600">
                      {items.map((item) => (
                        <li key={item}>
                          <a href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "bg-black/30 pointer-events-auto"
            : "bg-black/0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full z-40 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full">
          <img
            src="/menu.jpg"
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

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive && hasDropdown
                      ? "max-h-[999px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
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

                            <ul
                              className={`pl-4 pt-2 space-y-1 text-sm text-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
                                isSubActive
                                  ? "max-h-[999px] opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              {isSubActive &&
                                items.map((subItem) => (
                                  <li key={subItem}>
                                    <a href="#">{subItem}</a>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
