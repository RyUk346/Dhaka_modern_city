export default function Subsription() {
  return (
    <>
      <div className="w-full min-h-[500px] bg-[#1F4B43] flex justify-center items-center text-white">
        <div className="space-y-10 flex flex-col justify-center items-center">
          <img src="/mail.png" alt="" />
          <h1 className="text-[40px]  font-medium">Stay Up to Date</h1>
          <h1 className="text-[15px] leading-[28px] ">
            Subscribe to our newsletter to receive our weekly feed.
          </h1>
          <div className="relative md:w-[570px] max-w-[570px] h-[60px]">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full h-full rounded-[60px] bg-[rgba(255,255,255,.2)] px-4"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-6 bg-[#1F4B43] text-white rounded-r-[60px] flex items-center cursor-pointer">
              <h1>Send</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
