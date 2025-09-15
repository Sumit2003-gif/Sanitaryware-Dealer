import React, { useState, useEffect } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('contactForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactForm', JSON.stringify(formData));
    alert('Message saved locally!');
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12 items-start">
      {/* Left Info */}
      <motion.div
        className="lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          variants={fadeInUp}
          className="text-green-700 font-semibold mb-2 tracking-wider"
        >
          Contact With Us <span className="inline-block w-12 border-b-2 border-[#ECDD5E]"></span>
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-handwriting leading-tight mb-6 text-[#374233]"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          Have Questions? Feel Free <br /> to Write Us
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-gray-600 max-w-md mb-10"
        >
          Lorem ipsum dolor sit amet, consectetur notted adipis not icing elit sed do eiusmod tempor incididunt.
        </motion.p>

        {/* Contact Info Items */}
        <div className="space-y-6">
          {[{
            icon: <HiOutlineMail size={24}/>,
            label: 'Call Anytime',
            value: '+1 - (246) 333-0088'
          }, {
            icon: <HiOutlinePhone size={24} />,
            label: 'Write Email',
            value: 'needhelp@wostin.com'
          }, {
            icon: <HiOutlineLocationMarker size={24} />,
            label: 'Visit Us Anytime',
            value: '880 Broklyn Street New York. USA'
          }].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={0.2 + index * 0.2}
              className="flex items-center gap-4"
            >
              <div className="bg-[#404A3D] text-[#ECDD5E] p-4 rounded">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="font-semibold text-gray-900">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="lg:w-1/2 bg-white border border-gray-200 p-8 rounded-md shadow-md w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#F5F0E9] placeholder-gray-400 px-4 py-3 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#F5F0E9] placeholder-gray-400 px-4 py-3 rounded w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#F5F0E9] placeholder-gray-400 px-4 py-3 rounded w-full"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="bg-[#F5F0E9] placeholder-gray-400 px-4 py-3 rounded w-full"
          />
        </div>

        <textarea
          name="message"
          placeholder="Write message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#F5F0E9] placeholder-gray-400 px-4 py-3 rounded mb-6 resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-[#ECDD5E] text-[#404A3D] cursor-pointer font-semibold px-6 py-3 rounded hover:bg-[#6F9C4F] hover:text-white transition-colors w-full sm:w-auto"
        >
          Send a Message
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
