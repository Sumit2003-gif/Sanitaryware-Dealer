import React from "react";
import {
  FaCalculator,
  FaCalendarAlt,
  FaRecycle,
  FaTrashAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaCalculator size={34} className="text-white group-hover:text-[#4E5640]" />,
    title: "You Estimate",
    subtitle: "Load Size",
  },
  {
    icon: <FaCalendarAlt size={34} className="text-white group-hover:text-[#4E5640]" />,
    title: "You Choose",
    subtitle: "a Time",
  },
  {
    icon: <FaRecycle size={34} className="text-white group-hover:text-[#4E5640]" />,
    title: "We Pick",
    subtitle: "& Clean up",
  },
  {
    icon: <FaTrashAlt size={34} className="text-white group-hover:text-[#4E5640]" />,
    title: "We Responsibly",
    subtitle: "Dispose",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HomeHowItWorks = () => {
  return (
    <section className="bg-[#404A3D] text-white w-full -mt-24 relative z-10 rounded-t-3xl shadow-2xl py-14 pb-12 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="
                group
                cursor-pointer
                
                w-full md:w-auto
                flex flex-row md:flex-col
                items-center md:items-center
                text-left md:text-center
                relative
              "
              variants={cardVariants}
            >
              {/* Icon container */}
              <motion.div
                className="
                  w-20 h-20 md:w-24 md:h-24
                  bg-[#558E4C]
                  rounded-full
                  flex
                  
                  items-center
                  justify-center
                  shadow-lg
                  group-hover:bg-[#ECDD5E]
                  transition-colors
                  duration-300
                  flex-shrink-0
                  mb-0 md:mb-6
                  mr-6 md:mr-0
                "
                whileHover={{ scale: 1.1 }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <motion.div className="pt-0 md:pt-0 " variants={textVariants}>
                <p
                  className="text-3xl text-white group-hover:text-[#ECDD5E]"
                  style={{ fontFamily: "'Amatic SC', cursive" }}
                >
                  {step.title}
                </p>
                <p
                  className="text-3xl text-white group-hover:text-[#ECDD5E]"
                  style={{ fontFamily: "'Amatic SC', cursive" }}
                >
                  {step.subtitle}
                </p>
              </motion.div>

              {/* Divider (only on md+ screens, and not after last card) */}
              {/* {index < steps.length - 1 && (
                <div className="hidden md:block h-24 border-r border-gray-500 opacity-30 mx-6"></div>
              )} */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
