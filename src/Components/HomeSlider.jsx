import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const brands = [
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-1.png",
  },
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-5.png",
  },
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-4.png",
  },
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-1.png",
  },
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-3.png",
  },
  {
    default:
      "https://pixydrops.com/wostin/main-html/assets/images/brand/brand-1-2.png",
  },
];

// Text animation variants for fade & slide up
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const HomeSlider = () => {
  return (
    <section
      className="py-16 bg-white border border-gray-300 overflow-hidden max-w-7xl mx-auto px-4 md:px-8 rounded-md shadow-lg"
      id="brands-section"
    >
      {/* Animated Heading */}
      <motion.div
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-[Amatic_SC] text-[#404A3D]"
          variants={textVariants}
          custom={1}
        >
          Our Trusted Brands
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-2 max-w-xl mx-auto"
          variants={textVariants}
          custom={2}
        >
          We collaborate with the best partners to provide sustainable solutions.
        </motion.p>
      </motion.div>

      {/* Swiper slider with animated slides */}
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="brand-slider"
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
            style={{ cursor: "pointer" }}
          >
            <motion.div
              className="relative group w-40 h-24 flex items-center justify-center rounded-md shadow-md overflow-hidden bg-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Brand Image */}
              <img
                src={brand.default}
                alt={`brand-${index}`}
                className="w-full h-full object-contain relative z-10"
                draggable={false}
              />

              {/* White Overlay fades out on hover */}
              <div className="absolute inset-0 bg-white opacity-80 group-hover:opacity-0 transition-opacity duration-300 z-20" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
