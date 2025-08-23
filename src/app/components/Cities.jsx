export default function Cities() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mt-12 md:mt-20">
          <h1 className="text-[40px] font-medium">
            Find Properties in These Cities
          </h1>
          <h1 className="text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-4 text-white p-2 md:p-4 mb-12 md:mb-20">
          <div className="col-span-2 h-[380px] bg-[url('/mirpur.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">8 properties</h1>
              <h1 className="text-[21px] font-medium">Mirpur</h1>
            </div>
          </div>
          <div className="h-[380px] bg-[url('/mirpur.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">12 properties</h1>
              <h1 className="text-[21px] font-medium">Uttara</h1>
            </div>
          </div>
          <div className="h-[380px] bg-[url('/dhanmondi.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">20 properties</h1>
              <h1 className="text-[21px] font-medium">Dhanmondi</h1>
            </div>
          </div>
          <div className="h-[380px] bg-[url('/banani.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">20 properties</h1>
              <h1 className="text-[21px] font-medium">Banani</h1>
            </div>
          </div>
          <div className="h-[380px] bg-[url('/baridhara.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">20 properties</h1>
              <h1 className="text-[21px] font-medium">Baridhara</h1>
            </div>
          </div>
          <div className="col-span-2 h-[380px] bg-[url('/gulshan.jpg')] bg-cover bg-center rounded-[16px]">
            <div className="p-4">
              <h1 className="text-[15px]">12 properties</h1>
              <h1 className="text-[21px] font-medium">Gulshan</h1>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#E7C873] rounded-3xl pt-12">
          <div className="p-y-8 flex flex-col justify-center items-center">
            <h1 className="font-medium text-[40px] ">Why Choose Us</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          </div>
          <div className="flex gap-6 justify-center items-center text-[15px] text-center my-12 pb-12">
            <div className="w-[280px] flex flex-col justify-center items-center space-y-2">
              <img src="/house.svg" alt="" className="w-[50px] h-[60px] " />
              <h1 className="font-bold">Find your future home</h1>
              <h1 className="">
                We help you find a new home by offering a smart real estate
                experience
              </h1>
            </div>
            <div className="w-[280px] flex flex-col justify-center items-center space-y-2">
              <img
                src="/icon.png"
                alt=""
                className="max-w-[50px] max-h-[50px] "
              />
              <h1 className="font-bold">Experienced agents</h1>
              <h1 className="">
                Find an experienced agent who knows your market best
              </h1>
            </div>
            <div className="w-[280px] flex flex-col justify-center items-center space-y-2">
              <img
                src="/icon1.png"
                alt=""
                className="max-w-[50px] max-h-[50px] "
              />
              <h1 className="font-bold">Buy or rent homes</h1>
              <h1 className="">
                Millions of houses and apartments in your favourite cities
              </h1>
            </div>
            <div className="w-[280px] flex flex-col justify-center items-center space-y-2">
              <img
                src="/icon2.png"
                alt=""
                className="max-w-[50px] max-h-[50px] "
              />
              <h1 className="font-bold">List your own property</h1>
              <h1 className="">
                Sign up now and sell or rent your own properties
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
