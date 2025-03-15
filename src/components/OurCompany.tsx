import { FaHistory, FaBullseye, FaEye } from 'react-icons/fa';

export default function OurCompany() {
  return (
    <div className="bg-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row: History and Our Company */}
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start border-b-2 border-gray-400 pb-8">

          {/* History Section */}
          <div className="text-center mt-10 md:text-left mb-8 md:mb-0 md:flex-1">
            <img
              src="/images/52.png"
              alt="History Logo"
              className="w-14 mb-2 mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-bold">History</h3>
            <p className="text-lg md:text-xl mt-2 text-gray-600">
              E-Settlement Limited, founded in 2018, is a financial technology company based in Lagos, Nigeria, dedicated to providing innovative and dependable payment solutions across Africa.
              The company focuses on enhancing financial inclusion by offering services that cater to both urban and rural communities.

            </p>
          </div>

          {/* Our Company Title Section */}
          <div className="text-center md:text-right md:flex-1 flex items-center justify-end">
            <div>
              <h1 className="text-4xl md:text-6xl font-normal text-right">
                Our <span className="font-bold">Company</span>
              </h1>
              <div className="mt-8 md:ml-36">
                <img
                  src="/E settlemnt Logo.png"
                  alt="E-Settlement Logo"
                  className="mx-auto md:mx-0 grayscale max-w-[150px] md:max-w-[250px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second row: Mission and Vision */}
        <div className="flex flex-col md:flex-row justify-between gap-16 items-start border-b-2 border-gray-400 pb-8 mt-8">

          {/* Mission Section */}
          <div className="text-center md:text-left mb-8 md:mb-0 md:flex-1">
            <img
              src="/images/53.png"
              alt="Mission Logo"
              className="w-14 mb-2 mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="text-lg md:text-xl mt-2 text-gray-600">
            Simplifying global payments with innovative, secure, and inclusive solutions that empower businesses and communities to thrive.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center md:text-left md:flex-1">
            <img
              src="/images/54.png"
              alt="Vision Logo"
              className="w-14 mb-2 mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="text-lg md:text-xl mt-2 text-gray-600">
            To be the most trusted partner for digital payments globally, driving financial innovation and inclusion across diverse markets.
            </p>
          </div>
        </div>

        {/* Business Performance Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-24 space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-center md:text-left md:border-r-4 border-gray-300 pr-8 md:pr-12">
            <h2 className="text-5xl font-semibold text-gray-900">
              Business <br /> <span className="font-bold">Performance</span>
            </h2>
          </div>

          {/* Flexbox layout for equal height and width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center w-full">

            {/* Happy Satisfied Customer */}
            <div className="flex flex-col justify-center items-center md:border-r-4 border-gray-300 min-h-full w-full">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                19k<sup className=" text-6xl font-bold">+</sup>
              </h3>
              <p className="font-semibold text-xl text-gray-400">Happy Satisfied<br />Customer</p>
            </div>

            {/* Product Subscribers */}
            <div className="flex flex-col justify-center items-center md:border-r-4 border-gray-300 min-h-full w-full">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                3<sup className="text-6xl font-bold"></sup>
              </h3>
              <p className="font-semibold text-xl text-gray-400">Operational <br />Country</p>
            </div>

            {/* Expert Team Members */}
            <div className="flex flex-col justify-center items-center min-h-full w-full">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                50<sup className="text-6xl font-bold">+</sup>
              </h3>
              <p className="font-semibold text-xl text-gray-400">Expert Team<br />Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
