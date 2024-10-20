import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contaact = () => {
  return (
    <div className="relative w-full min-h-screen p-8 bg-black flex items-center justify-center overflow-hidden">
      {/* Background Circles */}
      <div className="hidden lg:block">
        <span className="absolute w-[130px] h-[130px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[10%] left-[-40px]"></span>
        <span className="absolute w-[80px] h-[80px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[30%] left-[30px]"></span>
        <span className="absolute w-[130px] h-[130px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[50%] right-[-40px]"></span>
        <span className="absolute w-[80px] h-[80px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[70%] right-[30px]"></span>
        <span className="absolute w-[360px] h-[360px] bg-white rounded-full top-[50%] left-[50%] translate-x-[-180px] translate-y-[-180px] opacity-10"></span>
      </div>
      <img
        src="img/shape.png"
        alt="Square"
        className="absolute h-[400px] top-[50%] left-[50%] translate-x-[181%] translate-y-[11%] opacity-10"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
        {/* Contact Info */}
        <div className="p-8">
          <h3 className="text-green-500 font-semibold text-2xl mb-4">
            Let's get in touch
          </h3>
          <p className="text-gray-300 mb-6">
            Have a project in mind or just want to connect? Feel free to drop me
            a message! I’m always open to discussing new opportunities,
            collaborations, or answering any questions you may have. Let’s
            create something amazing together!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-300">
              <FaMapMarkerAlt className="text-green-500 mr-4" />
              <p>East Bakalia, Chittagong, Bangladesh</p>
            </div>
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-green-500 mr-4" />
              <p>rakibulislam.eb@gmail.com</p>
            </div>
            <div className="flex items-center text-gray-300">
              <FaPhone className="text-green-500 mr-4" />
              <p>+880 18639-72739</p>
            </div>
          </div>

          <div>
            <p className="text-gray-300">Connect with me:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-white bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-md hover:scale-105 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-md hover:scale-105 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-md hover:scale-105 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-md hover:scale-105 transition-transform"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative p-8 bg-gray-800">
          {/* Decorative Circles */}
          <span className="absolute w-[130px] h-[130px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[130px] right-[-40px]"></span>
          <span className="absolute w-[80px] h-[80px] bg-gradient-to-br from-transparent to-green-600 rounded-full top-[10px] right-[30px]"></span>

          <form autoComplete="off" className="space-y-6">
            <h3 className="text-white font-semibold text-2xl mb-4">
              Contact with Me
            </h3>
            <div className="relative">
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-500 rounded-md text-gray-300 placeholder-transparent focus:outline-none focus:border-green-300 peer"
                placeholder="Username"
              />
              <label className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-green-300">
                Username
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-500 rounded-md text-gray-300 placeholder-transparent focus:outline-none focus:border-green-300 peer"
                placeholder="Email"
              />
              <label className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-green-300">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-500 rounded-md text-gray-300 placeholder-transparent focus:outline-none focus:border-green-300 peer"
                placeholder="Phone"
              />
              <label className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-green-300">
                Phone
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                className="w-full px-4 py-3 bg-transparent border-2 border-gray-500 rounded-md text-gray-300 placeholder-transparent focus:outline-none focus:border-green-300 peer min-h-[150px]"
                placeholder="Message"
              ></textarea>
              <label className="absolute top-4 left-4 text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:top-0 peer-focus:left-4 peer-focus:text-xs peer-focus:text-green-300">
                Message
              </label>
            </div>

            <input
              type="submit"
              value="Send"
              className="w-full px-4 py-3 bg-green-500 text-white border-2 border-green-500 rounded-md cursor-pointer transition-colors hover:bg-transparent hover:text-green-500"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contaact;
