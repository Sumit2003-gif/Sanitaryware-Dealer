import React from "react";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 },
  },
};

const iconVariants = {
  hover: {
    backgroundColor: "#ECDD5E",
    transition: { duration: 0.3 },
  },
};

const arrowVariants = {
  hover: {
    backgroundColor: "#558E4C",
    color: "#fff",
    transition: { duration: 0.3 },
  },
};

const IndustriesCard = ({ url, heading, text, Icon }) => {
  return (
    <motion.div
      className="relative bg-white rounded-lg shadow-sm border border-gray-200 text-center group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {/* Image Section */}
      <div className="relative border-2 overflow-hidden rounded-t-lg">
        <img src={url} alt={heading} className="w-full h-[272px] object-cover" />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10" />
      </div>

      {/* Icon and Content */}
      <div className="relative -mt-10 px-6 pb-6 pt-16 bg-white z-20 border rounded-b-lg">
        {/* Icon Circle */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center"
          variants={iconVariants}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <Icon className="text-green-800 text-3xl transition-colors duration-300 group-hover:text-[#404A3D]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-black text-4xl text-[#576055] mb-2 transition-colors duration-300"
          style={{ fontFamily: "'Amatic SC', cursive" }}
          whileHover={{ color: "#558E4C" }}
        >
          {heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-sm leading-relaxed mb-6 transition-colors duration-300"
          whileHover={{ color: "#404A3D" }}
        >
          {text}
        </motion.p>

        {/* Arrow Button */}
        <Link to="/contact">
        <motion.div
          className="mx-auto w-10 h-10 cursor-pointer bg-[#F5F0E9] flex items-center justify-center rounded-full transition-colors duration-300"
          variants={arrowVariants}
        >
          <MdArrowForward className="text-gray-700 transition-colors duration-300" />
        </motion.div>
        </Link>

        {/* Bottom Right Triangle Decoration */}
        <div
          className="absolute -bottom-0 right-0 z-10 w-0 h-0 border-b-[30px] border-b-[#EBE5DD] border-l-[30px] border-l-transparent
          group-hover:border-b-[#ECDD5E] transition-colors duration-300"
        />
      </div>
    </motion.div>
  );
};

export default IndustriesCard;
