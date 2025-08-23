export default function Hero() {
  return (
    <>
      <div className="w-full h-svh bg-[url('/hero.jpg')] bg-cover bg-center flex justify-center items-center text-[#1F4B43] font-roboto md:mt-[-120px]">
        <div className="flex mt-12 flex-col items-center space-y-4">
          <div className="w-[210px] h-[40px] border border-[#1F4B43] rounded-[40px] flex justify-center items-center">
            <h1 className="text-center font-medium text-[13px] ">
              LET US GUIDE YOUR HOME
            </h1>
          </div>
          <h1 className="text-center text-[16px] leading-[30px]">
            We’ve more than 25,000 apartments, place & plot.
          </h1>
          <h1 className="text-[60px] font-medium leading-[60px] text-center">
            Find Your Perfect Home
          </h1>
          <div className="relative mt-6">
            <input
              className="md:w-[690px] w-[300px] px-6 h-[72px] border rounded-[60px] border-[#EBEBEB] pr-20 shadow-lg"
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
          <div className="flex gap-2">
            <div className="w-[115px] h-[33px] border rounded-[33px] border-[#EBEBEB] flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
              <h1 className="text-[13px]">All Properties</h1>
            </div>
            <div className="w-[115px] h-[33px] border rounded-[33px] border-[#EBEBEB] flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
              <h1 className="text-[13px]">For Sale</h1>
            </div>
            <div className="w-[115px] h-[33px] border rounded-[33px] border-[#EBEBEB] flex items-center justify-center hover:bg-green-600 hover:text-white cursor-pointer">
              <h1 className="text-[13px]">For Rent</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
