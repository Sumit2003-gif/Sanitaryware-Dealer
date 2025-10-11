import React, { useState, useMemo } from 'react';
import NewsCard from './NewsCard';
import newsData from './NewsData';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 4;

const NewsSection = () => {
  const monthMap = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
  };

  const parseDate = (str) => {
    const [day, mon] = str.split(' ');
    const monthIndex = monthMap[mon.toUpperCase()] ?? 0;
    const year = new Date().getFullYear();
    return new Date(year, monthIndex, parseInt(day, 10));
  };

  const recentNews = useMemo(() => {
    return [...newsData].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  }, []);

  const latestNews = useMemo(() => {
    return [...newsData].sort((a, b) => parseDate(a.date) - parseDate(b.date));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(latestNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = latestNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Sidebar */}
      <aside className="md:w-1/3 bg-white rounded-xl shadow-lg p-6">
        <motion.h3
          className="text-2xl font-bold mb-6 text-[#404A3D] border-b pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Recent News
        </motion.h3>
        <ul className="space-y-6">
          {recentNews.slice(0, 5).map((item, i) => (
            <motion.li
              key={item.id}
              className="flex gap-4 hover:bg-green-50 bg-white/40 rounded-md p-2 transition cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-24 h-16 object-cover rounded-md flex-shrink-0 shadow"
              />
              <div>
                <time className="text-[#ECDD5E] font-semibold text-sm mb-1 block">{item.date}</time>
                <h4 className="text-gray-800 font-semibold text-md hover:text-green-700 transition">
                  {item.title.length > 60 ? item.title.slice(0, 60) + '...' : item.title}
                </h4>
              </div>
            </motion.li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="md:w-2/3">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-[#404A3D]">Latest News</h2>
        </motion.div>

        {/* Grid of News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              className='flex justify-center '
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NewsCard
                url={item.url}
                date={item.date}
                comments={item.comments}
                title={item.title}
                id={item.id}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          className="flex justify-center items-center space-x-4 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md font-semibold flex items-center ${
              currentPage === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <FaArrowRight className="rotate-180" />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-md font-semibold ${
                currentPage === i + 1
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-green-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md font-semibold flex items-center ${
              currentPage === totalPages
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <FaArrowRight />
          </button>
        </motion.div>
      </main>
    </motion.section>
  );
};

export default NewsSection;
