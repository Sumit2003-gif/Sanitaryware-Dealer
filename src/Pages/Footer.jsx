import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaArrowUp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const Footer = () => {
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Request Pickup', path: '/request-pickup' },
    { name: 'Management', path: '/management' },
    { name: 'Start Service', path: '/start-service' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Dumpster Rentals', path: '/services/dumpster-rentals' },
    { name: 'Bulk Trash Pickup', path: '/services/bulk-trash-pickup' },
    { name: 'Waste Removal', path: '/services/waste-removal' },
    { name: 'Zero Waste', path: '/services/zero-waste' },
  ];

  const socialIcons = [
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaFacebookF />, url: 'https://facebook.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaPinterestP />, url: 'https://pinterest.com' },
  ];

  return (
    <footer className="relative text-[#a0b09a]">
      {/* Main Background with Overlay */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/site-footer-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#374233] opacity-95 z-0" />

        {/* Top Strip: Logo + Tagline + Social Icons */}
        <motion.div 
          className="bg-[#374233] py-6 px-6 md:px-12 border-b border-[#465243] relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <img
                src="https://pixydrops.com/wostin/main-html/assets/images/resources/footer-logo.png"
                alt="Wostin Logo"
                className="h-10 object-contain"
              />
            </div>
            <div className="text-white text-center text-sm md:text-base font-medium">
              Waste Disposal Management & Pickup Services
            </div>
            <div className="flex items-center gap-6 text-white text-lg">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* About */}
          <motion.div variants={fadeInUp}>
            <h1 className="uppercase font-[Amatic_SC] text-3xl text-white mb-4">
              About
            </h1>
            <p className="mb-6 leading-relaxed">
              Lorem ipsum dolor sited ame etur adi pisicing elit tempor labore.
            </p>
            <form className="flex bg-white rounded overflow-hidden">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
                aria-label="Email Address"
              />
              <button
                type="submit"
                className="px-4 text-green-700 hover:text-green-800"
                aria-label="Subscribe"
              >
                <FaTelegramPlane />
              </button>
            </form>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-[Amatic_SC] text-white text-3xl mb-6">Links</h3>
            <ul className="space-y-3">
              {links.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="flex items-center gap-2 hover:text-[#e7da5f] cursor-pointer"
                  variants={fadeInUp}
                  custom={0.1 * i}
                >
                  <span className="text-[#e7da5f]">➔</span>
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-[Amatic_SC] text-white text-3xl mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item, i) => (
                <motion.li
                  key={item.name}
                  className="flex items-center gap-2 hover:text-[#e7da5f] cursor-pointer"
                  variants={fadeInUp}
                  custom={0.1 * i}
                >
                  <span className="text-[#e7da5f]">➔</span>
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-[Amatic_SC] text-white text-3xl mb-6">Contact</h3>
            <p className="mb-6 leading-relaxed">
              880 Broklyn Road Street, New Town <br />
              DC 5002, New York. USA
            </p>
            <div className="flex items-center gap-3 text-[#e7da5f] mb-3">
              <FaPhoneAlt size={20} />
              <div className="font-bold text-white">
                needhelp@wostin.com <br />
                +1- (246) 333-0088
              </div>
            </div>
            <div className="flex gap-6 mt-6">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e7da5f]"
                  aria-label={`Social link ${index + 1}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section with Shape and Scroll to Top */}
      <div
        className="relative bg-cover bg-center py-10"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/shapes/site-footer-bottom-shape.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#353E32] opacity-95 z-0" />

        {/* Copyright Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <p className="text-sm text-[#B0BAA2] py-3">
            © Copyright 2022 by Layerdrops.com
          </p>
        </div>

        {/* Scroll to Top Button */}
        <div className="absolute right-6 bottom-10 z-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-green-700 hover:bg-green-800 p-3 rounded-full text-white shadow-lg"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
