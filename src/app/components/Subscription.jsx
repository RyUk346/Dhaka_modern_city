export default function Subscription() {
  return (
    <>
      <div className="w-full min-h-[500px] bg-[#1F4B43] flex justify-center items-center text-white px-4">
        <div className="space-y-6 md:space-y-10 flex flex-col justify-center items-center text-center">
          <img
            src="/mail.png"
            alt="Mail Icon"
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
          />
          <h1 className="text-[28px] md:text-[40px] font-medium">
            Stay Up to Date
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[22px] md:leading-[28px] max-w-[500px]">
            Subscribe to our newsletter to receive our weekly feed.
          </p>
          <div className="relative w-full max-w-[570px] h-[50px] md:h-[60px]">
            <input
              type="email"
              placeholder="Your e-mail"
              className="w-full h-full rounded-[60px] bg-[rgba(255,255,255,0.2)] px-4 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-4 md:px-6 bg-[#1F4B43] text-white rounded-r-[60px] flex items-center gap-2 cursor-pointer">
              <span>Send</span>
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
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
