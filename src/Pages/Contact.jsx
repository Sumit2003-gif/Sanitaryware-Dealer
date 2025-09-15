import React from 'react';
import { Link } from 'react-router-dom';
import ContactSection from '../Components/ContactSection';
import { motion } from 'framer-motion';

const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const breadcrumbVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' },
  },
};

const Contact = () => {
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

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            variants={headingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-[Amatic_SC] uppercase tracking-widest mb-4"
          >
            Contact Us
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
            <span className="mx-2">-</span> Contact
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ContactSection />
      </motion.section>

      {/* Google Map Section */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="w-full h-[450px] rounded overflow-hidden shadow-lg border-4 border-yellow-200">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9875183453463!2d-74.00594148459322!3d40.71277597933092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3163d2efb9%3A0x8b08a0992f0f59f9!2s880%20Broklyn%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1694770315221!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
