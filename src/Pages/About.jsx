import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutCompany from '../Components/AboutComapny';
import HomeSlider from '../Components/HomeSlider';
import HomeTestimonial from '../Components/HomeTestimonial';
import AboutTeam from '../Components/AboutTeam';

// Animation Variants
const headingVariant = {
  hidden: { opacity: 0, y: 30 },
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

const About = () => {
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Animated Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[Amatic_SC] uppercase tracking-widest mb-4"
          >
            About Us
          </motion.h1>

          <motion.p
            variants={breadcrumbVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-yellow-400 font-medium text-lg"
          >
            <Link to="/" className="hover:underline">
              Home
            </Link>{' '}
            <span className="mx-2">-</span> About
          </motion.p>
        </div>
      </section>

      {/* About Company Section */}
      <section>
        <AboutCompany />
      </section>

      {/* Brand Slider */}
      <section>
        <HomeSlider />
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-center bg-cover bg-no-repeat py-24 px-6 text-white text-center"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/manage-waste-bg.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#414A3E]/80"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-[Amatic_SC] uppercase leading-tight mb-12"
          >
            Manage Waste Effectively
            <br />
            and Reduce Environmental Impact
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            <button className="bg-yellow-400 text-gray-800 font-semibold px-8 py-4 rounded shadow hover:bg-yellow-300 transition">
              Request A Pickup
            </button>
            <button className="bg-green-700 text-white font-semibold px-8 py-4 rounded shadow hover:bg-green-600 transition">
              Contact With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <HomeTestimonial />
      </section>

      {/* Our Team Section */}
      <section>
        <AboutTeam />
      </section>
    </div>
  );
};

export default About;
