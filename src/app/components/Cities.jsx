export default function Cities() {
  return (
    <>
      <div>
        {/* Section Title */}
        <div className="flex flex-col justify-center items-center mt-12 md:mt-20 px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-medium">
            Find Properties in These Cities
          </h1>
          <h1 className="text-sm md:text-lg mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white p-4 mb-12 md:mb-20">
          {/* First Row */}
          <div className="sm:col-span-2 h-[240px] md:h-[380px] bg-[url('/1.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">8 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Mirpur</h1>
            </div>
          </div>
          <div className="h-[240px] md:h-[380px] bg-[url('/2.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">12 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Uttara</h1>
            </div>
          </div>
          <div className="h-[240px] md:h-[380px] bg-[url('/3.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">20 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Dhanmondi</h1>
            </div>
          </div>

          {/* Second Row */}
          <div className="h-[240px] md:h-[380px] bg-[url('/4.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">20 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Banani</h1>
            </div>
          </div>
          <div className="h-[240px] md:h-[380px] bg-[url('/5.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">20 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Baridhara</h1>
            </div>
          </div>
          <div className="sm:col-span-2 h-[240px] md:h-[380px] bg-[url('/6.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-sm md:text-base">12 properties</h1>
              <h1 className="text-lg md:text-2xl font-medium">Gulshan</h1>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full bg-[#E7C873] rounded-3xl pt-12 px-4">
          <div className="text-center">
            <h1 className="font-medium text-2xl md:text-4xl">Why Choose Us</h1>
            <h1 className="text-sm md:text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center text-sm md:text-base text-center my-12 pb-12">
            <div className="w-[90%] sm:w-[45%] md:w-[280px] flex flex-col justify-center items-center space-y-2">
              <img src="/house.svg" alt="" className="w-[50px] h-[60px]" />
              <h1 className="font-bold">Find your future home</h1>
              <h1>
                We help you find a new home by offering a smart real estate
                experience
              </h1>
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[280px] flex flex-col justify-center items-center space-y-2">
              <img src="/icon.png" alt="" className="w-[50px] h-[50px]" />
              <h1 className="font-bold">Experienced agents</h1>
              <h1>Find an experienced agent who knows your market best</h1>
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[280px] flex flex-col justify-center items-center space-y-2">
              <img src="/icon1.png" alt="" className="w-[50px] h-[50px]" />
              <h1 className="font-bold">Buy or rent homes</h1>
              <h1>
                Millions of houses and apartments in your favourite cities
              </h1>
            </div>
            <div className="w-[90%] sm:w-[45%] md:w-[280px] flex flex-col justify-center items-center space-y-2">
              <img src="/icon2.png" alt="" className="w-[50px] h-[50px]" />
              <h1 className="font-bold">List your own property</h1>
              <h1>Sign up now and sell or rent your own properties</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
