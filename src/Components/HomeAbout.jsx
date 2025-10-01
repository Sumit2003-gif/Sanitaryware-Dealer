import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  "Lorem Ipsum is not simply random text",
  "Making this the first true generator on the Internet",
  "Various versions have evolved over the years",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomeAbout = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 md:py-20 px-4 sm:px-6 lg:px-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">
        {/* Left - Image and Experience */}
        <motion.div
          className="relative w-full lg:w-5/12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://pixydrops.com/wostin/main-html/assets/images/resources/leading-waste-img-1.jpg"
            alt="Worker"
            className="w-full h-auto rounded-xl shadow-lg"
          />

          {/* Experience Bubble */}
          <div className="absolute -top-10 md:-top-16 -left-6 md:-left-10 bg-[#558E4C] text-white px-6 md:px-10 py-6 md:py-8 w-32 md:w-40 text-center shadow-md rounded-lg">
            <p
              className="text-[#ECDD5E] text-4xl md:text-6xl font-semibold leading-none"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              18
              <span
                className="text-4xl md:text-6xl align-middle"
                style={{ fontFamily: "'Amatic SC', cursive" }}
              >
                +
              </span>
            </p>
            <p className="text-sm md:text-lg font-medium mt-2 leading-tight">
              Years of
              <br />
              Experience
            </p>

            {/* Triangle */}
            <div
              className="absolute bottom-0 -right-5 w-0 h-0 
              border-t-[20px] border-t-transparent 
              border-l-[20px] border-l-[#558E4C]"
            />
          </div>

          {/* Decorative Shape with float animation */}
          <img
            src="https://pixydrops.com/wostin/main-html/assets/images/shapes/leading-waste-img-shape-1.png"
            alt="Decoration"
            className="absolute bottom-[-20px] md:bottom-[-30px] -right-10 md:-right-16 w-[80%] md:w-[90%] pointer-events-none"
            style={{ animation: "floatX 4s ease-in-out infinite" }}
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="w-full lg:w-6/12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Small heading */}
          <motion.p
            className="text-[#558E4C] font-semibold text-sm uppercase tracking-widest mb-3 flex items-center gap-2"
            variants={itemVariants}
          >
            <span>Get to Know About Us</span>
            <div className="w-12 h-[2px] bg-[#ECDD5E] mt-1"></div>
          </motion.p>

          {/* Main Heading with fade + slight slide */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#404A3D] leading-tight mb-4 md:mb-6"
            style={{ fontFamily: "'Amatic SC', cursive" }}
            variants={itemVariants}
          >
            Leading in Waste Disposal
            <br />
            Management Services
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[#878986] text-lg md:text-xl lg:text-2xl mb-6"
            variants={itemVariants}
          >
            We're in this business{" "}
            <span
              className="text-[#558E4C] text-xl md:text-2xl underline underline-offset-4 decoration-[#ECDD5E]"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              since 1987
            </span>{" "}
            and we provide the best services with dedication and integrity.
          </motion.p>

          {/* Feature List */}
          <motion.ul
            className="space-y-4 text-gray-800 mb-8"
            variants={containerVariants}
          >
            {features.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <span className="text-white text-sm bg-[#558E4C] p-1 rounded-full flex items-center justify-center">
                  <FaCheck />
                </span>
                <span className="text-base md:text-lg text-[#404A3D]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Button with sliding hover effect */}
          <Link to="/about">
            <button className="relative cursor-pointer overflow-hidden bg-[#ECDD5E] text-[#404A3D] font-bold py-3 px-8 rounded-lg shadow-md group">
              {/* Left sliding background */}
              <span className="absolute top-0 left-0 w-1/2 h-full bg-[#558E4C] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none"></span>
              {/* Right sliding background */}
              <span className="absolute top-0 right-0 w-1/2 h-full bg-[#558E4C] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none"></span>

              {/* Button text */}
              <span className="relative z-10 group-hover:text-white">Discover More</span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Floating animation style */}
      <style>
        {`
          @keyframes floatX {
            0%, 100% { transform: translateX(10px); }
            50% { transform: translateX(30px); }
          }
        `}
      </style>
    </section>
  );
};

export default HomeAbout;