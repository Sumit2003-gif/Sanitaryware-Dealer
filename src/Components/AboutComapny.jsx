import React from 'react';
import { FaCheckCircle, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const AboutCompany = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-green-600 font-semibold"
          >
            About Wostin Company <span className="text-yellow-400">—</span>
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-5xl font-[Amatic_SC] text-[#374233] leading-tight"
          >
            Always Working for a <br /> Clean Tomorrow
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-500 leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </motion.p>

          <motion.ul variants={fadeUp} custom={3} className="space-y-3">
            <li className="flex items-center text-[#374233] font-medium">
              <FaCheckCircle className="text-green-600 mr-2" />
              Lorem Ipsum is not simply random text
            </li>
            <li className="flex items-center text-[#374233] font-medium">
              <FaCheckCircle className="text-green-600 mr-2" />
              Making this the first true generator on the Internet
            </li>
          </motion.ul>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="flex flex-col sm:flex-row gap-8 pt-4"
          >
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-300 text-[#374233] font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl shadow">
                01
              </div>
              <p className="font-[Amatic_SC] text-xl leading-tight text-[#374233]">
                Going Above <br /> and Beyond
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-300 text-[#374233] font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl shadow">
                02
              </div>
              <p className="font-[Amatic_SC] text-xl leading-tight text-[#374233]">
                Committed to <br /> People First
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image with Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[450px]"
        >
          {/* Yellow angled background */}
          <div className="absolute inset-0 bg-[#ECDD5E] rotate-6 rounded-md z-0"></div>

          {/* Image */}
          <img
            src="https://pixydrops.com/wostin/main-html/assets/images/resources/always-working-img.jpg"
            alt="Waste container"
            className="relative w-full h-full object-cover rounded-md shadow-lg"
          />

          {/* Play button with ripple effect */}
          <div
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span className="absolute w-28 h-28 rounded-full border-2 border-yellow-500 opacity-30 animate-ping"></span>
            <span className="absolute w-20 h-20 rounded-full border-2 border-yellow-500 opacity-50 animate-ping delay-200"></span>

            <button
              aria-label="Play video"
              className="relative z-30 w-20 h-20 bg-green-700 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-green-600 transition shadow-lg"
            >
              <FaPlay className="text-white text-3xl ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompany;
