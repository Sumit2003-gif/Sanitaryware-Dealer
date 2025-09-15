import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsSection from '../Components/NewsSection';

const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const breadcrumbVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
  },
};

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/page-header-bg.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Animated Heading */}
          <motion.h1
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[Amatic_SC] uppercase tracking-widest mb-4"
          >
            Latest News
          </motion.h1>

          {/* Animated Breadcrumbs */}
          <motion.p
            variants={breadcrumbVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-yellow-400 font-medium text-lg"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">-</span> News
          </motion.p>
        </div>
      </section>

      {/* News Section */}
      <section>
        <NewsSection />
      </section>
    </div>
  );
};

export default Blog;
