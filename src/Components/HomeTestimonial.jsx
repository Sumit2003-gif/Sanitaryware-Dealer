import React from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonials = [
  {
    name: 'Kevin Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    title: 'Great job and fair pricing',
    content:
      'Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, vel pretium tellus. Class aptent sociosqu ad litora torquent per conubia nostra.',
  },
  {
    name: 'Jessica Brown',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    title: 'Very professional team',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  },
  {
    name: 'Sarah Milton',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    title: 'Excellent support!',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec elit at sapien consequat tincidunt.',
  },
];

const edgeProfiles = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: 'easeOut' },
  }),
};

const TestimonialCard = ({ url, name, header, content }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeUp}
    className="bg-white shadow-xl rounded-lg p-8 max-w-xl mx-auto relative"
  >
    {/* Stars */}
    <div className="flex items-center gap-1 mb-4 text-[#ECDD5E]">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={20} />
      ))}
    </div>

    {/* Heading */}
    <h2 className="text-2xl font-[Amatic_SC] text-[#2F3A2D] mb-5 uppercase tracking-widest">
      {header}
    </h2>

    {/* Divider */}
    <hr className="my-5 border-gray-200" />

    {/* Content */}
    <p className="text-gray-700 text-lg leading-relaxed mb-8">{content}</p>

    {/* User Info */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-full border-4 border-green-600 overflow-hidden shadow-md">
          <img src={url} alt={name} className="w-full h-full object-cover p-1 rounded-full" />
        </div>
        <div>
          <h3 className="text-green-700 font-semibold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">Customer</p>
        </div>
      </div>

      <FaQuoteRight size={32} className="text-[#ECDD5E] opacity-90" />
    </div>
  </motion.div>
);

const HomeTestimonial = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-no-repeat bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/testimonial-one-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F0EBE4]/95 z-0"></div>

      {/* Circular profile images around edges */}
      {edgeProfiles.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`Profile ${idx}`}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: idx * 0.2, duration: 0.6, ease: 'easeOut' }}
          className={`absolute rounded-full border-4 border-white shadow-lg w-16 h-16 object-cover
            ${idx === 0 ? 'top-[17%] left-[34%]' : ''}
            ${idx === 1 ? 'top-10 right-20' : ''}
            ${idx === 2 ? 'bottom-12 right-[40%]' : ''}
            ${idx === 3 ? 'bottom-[12rem] right-16' : ''}
            ${idx === 4 ? 'top-1/2 left-[37%] -translate-y-1/2' : ''}
          `}
          style={{ willChange: 'transform, opacity' }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        {/* Left Side - Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="md:w-1/3 flex flex-col justify-center"
        >
          <p className="text-green-700 font-semibold text-sm flex items-center gap-2 mb-4">
            Our Customers Feedbacks
            <span className="block w-12 h-[3px] bg-[#ECDD5E]"></span>
          </p>

          <h1 className="text-5xl md:text-6xl text-[#2F3A2D] font-[Amatic_SC] leading-tight mb-8">
            What Our Customers <br /> Are Talking About <br /> Our Services
          </h1>

          <p className="text-gray-700 mb-10 max-w-lg text-lg leading-relaxed">
            Proin a lacus arcu. Nullam id dui eu orci maximus. Cras at auctor lectus, pretium tellus.
          </p>

          <button className="bg-[#ECDD5E] text-[#2F3A2D] font-semibold px-6 py-4 rounded w-full max-w-xs hover:bg-yellow-400 transition">
            View All Feedbacks
          </button>
        </motion.div>

        {/* Right Side - Swiper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="md:w-1/2 w-full"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full rounded-lg"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  url={t.image}
                  name={t.name}
                  header={t.title}
                  content={t.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
