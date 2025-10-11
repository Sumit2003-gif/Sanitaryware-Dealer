import React, { useEffect, useState } from "react";
import { FaPlay, FaRecycle } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Cards data
const cardsData = [
  {
    number: 260,
    title: "Industries Served",
    description: "Lorem Ipsum is simply dummy ext of the new design.",
  },
  {
    number: 3600,
    title: "Waste Picked Up",
    description: "Lorem Ipsum is simply dummy ext of the new design.",
  },
  {
    number: 890,
    title: "Happy Customers",
    description: "Lorem Ipsum is simply dummy ext of the new design.",
  },
];

// Card component with animated number
const Card = ({ number, title, description }) => {
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const animation = animate(count, number, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = count.on("change", (v) => setCurrent(Math.floor(v)));

    return () => {
      animation.stop();
      unsubscribe();
    };
  }, [count, number]);

  return (
    <motion.div
      className="bg-[#486943] group hover:bg-[#404A3D] p-6 rounded-md max-w-xs text-white relative flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Left content */}
      <div className="flex flex-col gap-2 sm:flex-1">
        <h1 className="text-6xl font-[Amatic_SC] leading-none">
          {current}
          <span className="">+</span>
        </h1>
        <p className="text-[#E4D75D] font-semibold text-lg group-hover:text-[#ECDD5E]">
          {title}
        </p>
        <p className="text-[#C4E4BF] group-hover:text-[#BFE8C3]">{description}</p>
      </div>

      {/* Icon */}
      <div className="ml-auto self-center opacity-50 text-[#558E4C] group-hover:text-white group-hover:opacity-100 text-6xl">
        <FaRecycle />
      </div>
    </motion.div>
  );
};

// Animated skill bar component
const AnimatedSkill = ({ label, target }) => {
  const progress = useMotionValue(0);
  const rounded = useTransform(progress, (v) => Math.round(v));
  const width = useTransform(progress, (v) => `${v}%`);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const controls = animate(progress, target, {
      duration: 1.5,
      ease: "easeInOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setCurrent(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [progress, rounded, target]);

  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Label */}
      <div className="text-gray-700 font-semibold mb-1">{label}</div>

      {/* Progress bar container */}
      <div className="w-full bg-[#F5F0E9] rounded-full h-4 relative overflow-visible">
        {/* Progress fill */}
        <motion.div
          className="bg-[#ECDD5E] h-4 rounded-full"
          style={{ width }}
        />

        {/* Percentage number */}
        <span
          className="absolute -top-6 text-sm font-semibold text-[#8F908E] select-none"
          style={{
            left: `${current}%`,
            transform: "translateX(-50%)",
          }}
        >
          {current}%
        </span>
      </div>
    </motion.div>
  );
};

const HomeSkill = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-10 py-16 gap-12">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[#689B60] font-semibold text-sm flex items-center gap-2">
            Our Skills & Expertise{" "}
            <span className="block w-12 h-[2px] bg-[#ECDD5E]"></span>
          </p>

          <h2
            className="text-4xl md:text-7xl font-[Amatic_SC] text-[#404A3D] uppercase leading-tight"
            style={{ fontFamily: "'Amatic SC', cursive" }}
          >
            We are Dedicated to Serve <br /> you all Our Time
          </h2>

          <p className="text-[#8F908E] max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </p>

          {/* Animated Skills */}
          <div className="space-y-6 max-w-md">
            <AnimatedSkill label="Waste Management" target={90} />
            <AnimatedSkill label="Recycling" target={46} />
          </div>
        </motion.div>

        {/* Right image with play button */}
        <motion.div
          className="md:w-1/2 relative max-w-lg w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Yellow angled background */}
          <div className="absolute w-full h-full bg-[#ECDD5E] rotate-6 z-0 rounded-sm"></div>

          {/* Image */}
          <img
            src="https://pixydrops.com/wostin/main-html/assets/images/resources/we-dedicated-img.jpg"
            alt="Waste container"
            className="relative z-10 w-full h-full rounded shadow-lg object-cover"
          />

          {/* Play button with ripple effect */}
          <div
            className="absolute z-20 inset-0 m-auto flex items-center justify-center"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <span className="absolute w-28 h-28 rounded-full border-2 border-yellow-500 opacity-30 animate-ping"></span>
            <span className="absolute w-20 h-20 rounded-full border-2 border-yellow-500 opacity-50 animate-ping delay-200"></span>

            <button
              aria-label="Play video"
              className="relative z-10 w-20 h-20 bg-green-700 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-green-600 transition"
            >
              <FaPlay className="text-white text-3xl ml-1" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Cards section */}
      <section
        className="relative hidden  bg-cover bg-center lg:flex justify-center items-center h-[90vh] px-6 md:px-0"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/counter-one-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#518748]/90"></div>
        <div className="flex  sm:flex-row gap-8 p-8 pt-10 justify-center max-w-7xl w-full">
          {cardsData.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeSkill;
