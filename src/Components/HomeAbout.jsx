import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { i } from "framer-motion/client";

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
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-6 sm:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-around items-center gap-16 lg:gap-28">
        {/* Left - Image and Experience */}
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://pixydrops.com/wostin/main-html/assets/images/resources/leading-waste-img-1.jpg"
            alt="Worker"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />

          {/* Experience Bubble */}
          <div className="absolute -top-16 -left-10 bg-[#558E4C] text-white px-10 py-8 w-40 text-center shadow-md rounded-lg">
            <p
              className="text-[#ECDD5E] text-6xl font-semibold leading-none"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              18
              <span
                className="text-6xl align-middle"
                style={{ fontFamily: "'Amatic SC', cursive" }}
              >
                +
              </span>
            </p>
            <p className="text-lg font-medium mt-2 leading-tight">
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
            className="absolute bottom-[-30px] -right-16 w-[90%] pointer-events-none"
            style={{ animation: "floatX 4s ease-in-out infinite" }}
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="w-full lg:w-1/2"
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
            className="text-4xl md:text-6xl font-extrabold text-[#404A3D] leading-tight mb-6"
            style={{ fontFamily: "'Amatic SC', cursive" }}
            variants={itemVariants}
          >
            Leading in Waste Disposal
            <br />
            Management Services
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-[#878986] text-2xl mb-6"
            variants={itemVariants}
          >
            We’re in this business{" "}
            <span
              className="text-[#558E4C] text-2xl underline underline-offset-4 decoration-[#ECDD5E]"
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
                <span className="text-md text-[#404A3D]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Button with sliding hover effect */}
          <Link to="/about">
          <button className="relative cursor-pointer overflow-hidden bg-[#ECDD5E] text-[#404A3D] font-bold py-3 px-8 rounded-lg shadow-md group">
            {/* Left sliding background */}
            <span className="absolute top-0 left-0 w-1/2 h-full bg-[#558E4C] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none"></span>
            {/* Right sliding background */}
            <span className="absolute top-0 right-0 w-1/2 h-full bg-[#558E4C] translate-x-full group-hover:translate-x-0 transition-transform  duration-500 ease-in-out pointer-events-none"></span>

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
          @media (max-width: 1024px) {
            /* Adjust experience bubble for smaller screens */
            .absolute.-top-16.-left-10 {
              top: -12rem;
              left: -1.5rem;
              width: 10rem;
              padding: 1.5rem 1.75rem;
            }
          }
          @media (max-width: 640px) {
            .absolute.-top-16.-left-10 {
              top: -8rem;
              left: -1rem;
              width: 8rem;
              padding: 1rem 1.25rem;
            }
            .absolute.bottom-[-30px].-right-16 {
              bottom: -15px;
              right: -8px;
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HomeAbout;
