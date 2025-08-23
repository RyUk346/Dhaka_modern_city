"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { properties } from "../data/properties";

export default function FeaturedHomes() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const CustomDot = ({ onClick, index, active }) => (
    <button
      className={`w-4 h-4 mx-2 pb-[-12px] rounded-full ${
        active ? "bg-[#E61A1A] w-8" : "bg-gray-300"
      }`}
      onClick={() => onClick()}
    />
  );

  return (
    <div className="bg-[#F6F8FA]  pb-16 md:px-24">
      <div className="flex items-center justify-center pt-[120px] mb-8">
        <h1 className="text-[40px] leading-13 font-semibold">Homes For You</h1>
      </div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        customDot={<CustomDot />}
        showDots
        className="pb-8"
      >
        {properties.map((property) => (
          <div key={property.id} className="p-4">
            <div className="relative overflow-hidden bg-white shadow-md p-2">
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
                    className={`px-4 py-2 rounded-[33px] text-sm font-medium
        ${
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
                <div className="flex justify-between">
                  <h1 className="text-[12px] md:text-[19px] font-medium ">
                    {property.name}
                  </h1>
                  <p className="text-[#EB664E] text-[12px] md:text-[19px] font-semibold">
                    {property.price}
                  </p>
                </div>
                <p className="text-gray-600 text-sm">{property.address}</p>
                <div className="flex space-x-4 text-gray-700 text-sm mt-2">
                  <span className="flex gap-2 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M2 3.5V20.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 8.5L22 20.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 8.5L6 10.5H22"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 15.5H6M22 15.5H19"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5"
                        stroke="#141B34"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {property.bed} Bed
                  </span>
                  <span className="flex gap-2 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M6 20L5 21M18 20L19 21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M2 12H22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M8 6L10.5 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    {property.bath} Bath
                  </span>
                  <span className="flex gap-2 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      color={"#000000"}
                      fill={"none"}
                    >
                      <path
                        d="M21 22V7.4849C21 6.38738 21 5.83862 20.6845 5.37551C20.3689 4.9124 19.7876 4.608 18.6251 3.99921L17.1459 3.22461C15.3209 2.26893 14.4084 1.7911 13.7042 2.08712C13 2.38315 13 3.24459 13 4.96746V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M22 22H2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M21 8H19M21 11H19M21 14H19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M11.5 13H12.5M11.5 16H12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <ellipse
                        cx="3.5"
                        cy="14"
                        rx="1.5"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      ></ellipse>
                      <path
                        d="M3.5 16V22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    {property.sqft} Sqft
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
