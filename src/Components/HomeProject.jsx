// ...rest of your imports remain same
import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { i } from "framer-motion/client";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const textSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Card = ({ url, header, texter }) => (
  <motion.div
    variants={cardVariants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.4 }}
    className="relative group overflow-hidden rounded-lg shadow-lg w-full max-w-[300px] h-[400px] bg-cover bg-center "
    style={{ backgroundImage: `url(${url})` }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-500 ease-in-out"></div>

    {/* Text Content */}
    <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-md transform group-hover:-translate-y-4 transition-all duration-500 ease-in-out z-10">
      <p className="text-gray-500 font-semibold">{header}</p>
      <h1 className="text-xl font-[Amatic_SC] text-green-700">{texter}</h1>
    </div>

    {/* Arrow Button */}
    <div className="absolute bottom-6 right-6 z-20">
      <Link to="/contact">
      <button
        aria-label="View project"
        className="w-10 h-10 rounded-full cursor-pointer bg-[#3d4539] text-white group-hover:bg-yellow-300 group-hover:text-gray-900 transition duration-500 ease-in-out flex items-center justify-center"
      >
        <MdArrowForward size={20} />
      </button>
      </Link>
    </div>
  </motion.div>
);

const HomeProject = () => {
  const cardsData = [
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/resources/project-1-1.jpg",
      heading: "Grocery Waste Removal",
      subheading: "Waste Pickup",
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/resources/project-1-2.jpg",
      heading: "Home Trash Picked",
      subheading: "Waste Pickup",
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/resources/project-1-3.jpg",
      heading: "Construction Collection",
      subheading: "Waste Pickup",
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/resources/project-1-4.jpg",
      heading: "Business Waste Pickup",
      subheading: "Waste Pickup",
    },
    
  ];

  return (
    <section
      className="relative py-20 px-4 md:px-12 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/project-one-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2F3A2D]/90"></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <motion.p
            variants={textSlideUp}
            custom={1}
            className="text-[#A5B9AD] font-semibold text-sm flex justify-center items-center gap-2 mb-2"
          >
            What We’re Offering{" "}
            <span className="block w-12 h-[2px] mt-2 bg-[#ECDD5E]"></span>
          </motion.p>

          <motion.h1
            variants={textSlideUp}
            custom={2}
            className="text-white text-4xl md:text-5xl font-[Amatic_SC] leading-tight"
          >
            Recently We Successfully Completed <br />
            Some Waste Projects
          </motion.h1>
        </motion.div>

        {/* Cards Grid - responsive */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-8 
            justify-center
          "
        >
          {cardsData.map((card, idx) => (
            <Card
              key={idx}
              url={card.url}
              header={card.subheading}
              texter={card.heading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProject;
