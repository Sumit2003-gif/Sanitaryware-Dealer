import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaTrashAlt, FaTrash, FaRestroom, FaRecycle } from "react-icons/fa";
import { motion } from "framer-motion";

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

const Card = ({ url, heading, texter, Icon }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className="group relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg  bg-white pt-4 mx-auto"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image */}
      <div className="relative">
        <img src={url} alt={heading} className="w-full h-48 object-cover" />

        {/* Diagonal Black Overlay */}
        <div
          className="absolute inset-0 transform translate-x-[-100%] translate-y-[100%] opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none"
          style={{
            background:
              "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0))",
          }}
        ></div>
      </div>

      {/* Icon overlapping image and white background */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#558E4C] text-white p-4 rounded-full shadow-lg group-hover:text-[#404A3D] group-hover:bg-[#ECDD5E] transition-colors duration-300">
          <Icon size={32} />
        </div>
      </div>

      {/* Heading + Hover Text */}
      <div className="pt-12 pb-6 text-center px-4">
        <h1
          className="text-xl font-[Amatic_SC] text-[#404A3D]"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          {heading}
        </h1>

        {/* Hover Text Below Heading */}
        <p className="text-sm px-6 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
          {texter}
        </p>
      </div>
    </motion.div>
  );
};

const HomeOffering = () => {
  const cardsData = [
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/services/services-1-1.jpg",
      heading: "Zero Waste",
      texter: "Lorem ipsum dolor sit amet, adipelit do.",
      Icon: FaTrashAlt,
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/services/services-1-2.jpg",
      heading: "Dumpster Rental",
      texter: "Lorem ipsum dolor sit amet, adipelit do.",
      Icon: FaTrash,
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/services/services-1-3.jpg",
      heading: "Portable Toilet",
      texter: "Lorem ipsum dolor sit amet, adipelit do.",
      Icon: FaRestroom,
    },
    {
      url: "https://pixydrops.com/wostin/main-html/assets/images/services/services-1-4.jpg",
      heading: "Recycling Service",
      texter: "Lorem ipsum dolor sit amet, adipelit do.",
      Icon: FaRecycle,
    },
  ];

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 md:flex md:justify-between md:items-start gap-8 px-6 flex-col md:flex-row"
        >
          <motion.div
            custom={1}
            variants={textSlideUp}
            className="mb-6 md:mb-0 max-w-lg"
          >
            <p className="text-[#689B60] font-semibold text-sm flex items-center gap-2 mb-2">
              What We’re Offering{" "}
              <span className="block w-12 h-[2px] bg-[#ECDD5E]"></span>
            </p>
            <h1
              className="text-4xl md:text-6xl font-[Amatic_SC] text-[#404A3D] leading-tight"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              The Services We’re Providing <br /> to Our Customers
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            variants={textSlideUp}
            className="text-gray-600 text-lg max-w-md md:self-center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. quis
            nostrud exercitation ullamco laboris.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {cardsData.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="bg-[#ECDD5E] mx-6 md:mx-16 my-12 text-[#404A3D] flex flex-col md:flex-row items-center justify-between py-12 px-6 gap-10 rounded-md group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Text */}
        <h1
          className="text-4xl md:text-6xl font-medium tracking-wide text-center md:text-left font-[Amatic_SC]"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          Have Waste/Pickup?
        </h1>

        {/* Phone Icon with hover animation */}
        <div className="transition-all duration-500 bg-[#404A3D] p-5 rounded-full group-hover:bg-white cursor-pointer">
          <BiPhoneCall
            size={40}
            className="text-[#ECDD5E] transition-colors duration-500 group-hover:text-[#558E4C]"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-lg">Lorem ipsum dolor sit am cons sid</p>
          <h1 className="text-2xl font-bold mt-1 transition-colors duration-300 hover:text-[#558E4C] cursor-pointer">
            +1- ( 246 ) 333 - 0079
          </h1>
        </div>
      </motion.section>
    </>
  );
};

export default HomeOffering;
