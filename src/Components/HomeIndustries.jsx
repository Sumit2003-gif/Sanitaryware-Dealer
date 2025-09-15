import React from "react";
import { FaHotel, FaStethoscope, FaShoppingBasket } from "react-icons/fa";
import IndustriesCard from "./IndustriesCard";
import { motion } from "framer-motion";

const industriesData = [
  {
    id: 1,
    url: "https://pixydrops.com/wostin/main-html/assets/images/resources/industries-1-1.jpg",
    heading: "Hotel & Restaurant",
    text: "Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro.",
    Icon: FaHotel,
  },
  {
    id: 2,
    url: "https://pixydrops.com/wostin/main-html/assets/images/resources/industries-1-2.jpg",
    heading: "Medical & Hospital",
    text: "Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro.",
    Icon: FaStethoscope,
  },
  {
    id: 3,
    url: "https://pixydrops.com/wostin/main-html/assets/images/resources/industries-1-3.jpg",
    heading: "Grocery Stores",
    text: "Sed quia magni dolores eos ratione voluptatem sequi site, qui nesciunt eque sit porro.",
    Icon: FaShoppingBasket,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomeIndustries = () => {
  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-cover bg-center bg-no-repeat min-h-[75vh]"
      style={{
        backgroundImage:
          "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/industries-one-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F8F4EE]/90 backdrop-blur-sm z-0"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 max-w-xl"
          variants={containerVariants}
        >
          <motion.p
            className="text-green-700 font-semibold uppercase tracking-wider text-sm mb-3 flex justify-center items-center gap-3"
            variants={textVariants}
          >
            <span>We Cover Industries</span>
            <div className="w-16 h-[2px] bg-yellow-400 rounded"></div>
          </motion.p>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 uppercase"
            style={{ fontFamily: "'Amatic SC', cursive" }}
            variants={textVariants}
          >
            Industries We Served
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
          variants={containerVariants}
        >
          {industriesData.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <IndustriesCard
                url={item.url}
                heading={item.heading}
                text={item.text}
                Icon={item.Icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeIndustries;
