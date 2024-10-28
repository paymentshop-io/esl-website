import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function PartnerWorks() {
  return (
    <div className="bg-gray-100 py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-6xl text-gray-900">
          We Have <span className="font-bold">Worked</span> With
        </h2>

        {/* Carousel Section */}
        <div className="relative mt-8 md:mt-12 flex items-center justify-center">
          {/* Left Arrow (Hidden on Mobile) */}
          <div className="hidden md:flex absolute -left-10 top-1/2 transform -translate-y-1/2">
            <button>
              <SlArrowLeft className="text-4xl md:text-5xl text-gray-400" />
            </button>
          </div>

          {/* Carousel Items */}
          <div className="flex items-center justify-center space-x-4 md:space-x-9 bg-black py-8 md:py-12 px-2 md:px-4 rounded-3xl shadow-lg overflow-x-auto scrollbar-hide">
            {["/images/paypad.webp", "/images/paypad.webp", "/images/paypad.webp", "/images/paypad.webp", "/images/paypad.webp"].map((src, index) => (
              <div key={index} className="w-32 md:w-40 h-15 flex-shrink-0 flex items-center justify-center bg-white p-2 rounded-md shadow-md">
                <img src={src} alt={`Partner Logo ${index + 1}`} className="w-full h-auto"/>
              </div>
            ))}
          </div>

          {/* Right Arrow (Hidden on Mobile) */}
          <div className="hidden md:flex absolute -right-10 top-1/2 transform -translate-y-1/2">
            <button>
              <SlArrowRight className="text-4xl md:text-5xl text-gray-400" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 md:mt-10 flex justify-center space-x-2 md:space-x-3">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full ${index === 1 ? "bg-gray-500" : "bg-gray-400"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
