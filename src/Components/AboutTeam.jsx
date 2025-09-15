import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';

// Icon map for dynamic rendering
const socialIconsMap = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  pinterest: FaPinterest,
  instagram: FaInstagram,
};

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const teamMembers = [
  {
    name: 'Kevin Martin',
    title: 'Accountant',
    image: 'https://pixydrops.com/wostin/main-html/assets/images/team/team-1-1.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
  {
    name: 'Jessica Brown',
    title: 'Co Founder',
    image: 'https://pixydrops.com/wostin/main-html/assets/images/team/team-1-2.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
  {
    name: 'David Cooper',
    title: 'Senior Assistant',
    image: 'https://pixydrops.com/wostin/main-html/assets/images/team/team-1-3.jpg',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      pinterest: '#',
      instagram: '#',
    },
  },
];

// Profile Card Component
const ProfileCard = ({ name, title, image, yellowStroke, socialLinks, index }) => {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white group rounded-xl overflow-hidden shadow-md relative transition-all duration-300"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent opacity-0 translate-x-[-100%] translate-y-[100%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-10 pointer-events-none" />

      {/* Yellow Brush Stroke */}
      <img
        src={yellowStroke}
        alt="Yellow Brush"
        className="absolute top-1/3 right-[-100%] w-3/5 opacity-0 group-hover:right-0 group-hover:opacity-100 transition-all duration-700 ease-out z-20"
      />

      {/* Info */}
      <div className="p-6 text-center relative z-30 bg-white">
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-[Amatic_SC] text-[#3E4A2D]">{name}</h2>

        <hr className="my-6 w-16 border-t border-gray-200 mx-auto" />

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-4 text-[#3E4A2D] text-xl mb-6">
          {Object.entries(socialLinks).map(([platform, url]) => {
            const Icon = socialIconsMap[platform];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                <Icon />
              </a>
            );
          })}

          {/* Arrow Button */}
          <button className="w-10 h-10 ml-8 bg-[#F5F3EC] flex justify-center items-center group-hover:bg-[#ECDD5E] text-[#3E4A2D] rounded-full shadow transition">
            <MdArrowForward />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// About Team Section
const AboutTeam = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-3 flex justify-center items-center gap-2"
        >
          <p className="text-[#689B60] font-semibold text-sm">Team Behind Success</p>
          <span className="block w-12 h-[2px] bg-[#ECDD5E]"></span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-[Amatic_SC] text-[#3E4A2D] mb-12"
        >
          Expert Staff & Members
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              index={index}
              name={member.name}
              title={member.title}
              image={member.image}
              yellowStroke="https://pixydrops.com/wostin/main-html/assets/images/shapes/team-one-shape.png"
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
