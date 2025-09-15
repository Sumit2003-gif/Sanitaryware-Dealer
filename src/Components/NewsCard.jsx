import React from 'react';
import { FaArrowRight, FaClock, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const NewsCard = ({ id, url, date, comments, title }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="group w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 relative"
  >
    {/* Image with Overlay */}
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={url}
        alt="news"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Shade */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>

      {/* Plus icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-4xl font-thin">
        +
      </div>

      {/* Date */}
      <div className="absolute bottom-2 left-2 bg-[#ECDD5E] text-gray-900 font-semibold px-3 py-1 text-sm rounded-sm shadow">
        {date}
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Meta */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-5 text-sm text-gray-500 mb-4"
      >
        <div className="flex items-center gap-1">
          <FaClock className="text-[#62954E]" />
          <span>by Admin</span>
        </div>
        <div className="flex items-center gap-1">
          <FaComments className="text-[#62954E]" />
          <span>{comments} Comments</span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        transition={{ delay: 0.2 }}
        className="text-3xl font-semibold text-[#2F3A2D] hover:text-[#] mb-5 font-[Amatic_SC]  transition-colors duration-300"
      >
        {title}
      </motion.h2>

      {/* Read More */}
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.3 }}
      >
        <Link
          to={`/news/${id}`}
          className="relative flex items-center justify-between group/link cursor-pointer overflow-hidden"
        >
          <div className="text-[#62954E] group-hover:text-[#404A3D] font-semibold flex items-center gap-2 transition-colors z-10">
            <span>Read More</span>
            <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </div>

          {/* Animated Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-600 group-hover/link:w-full transition-all duration-500 origin-left z-0"></div>
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

export default NewsCard;
