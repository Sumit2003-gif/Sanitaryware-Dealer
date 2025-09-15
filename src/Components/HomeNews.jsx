import React from 'react';
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';

const posts = [
  {
    date: '20 DEC',
    author: 'Admin',
    comments: 2,
    title: 'Waste Management Container or Bin for my Home?',
    description: 'Read More',
    imageUrl: 'https://pixydrops.com/wostin/main-html/assets/images/blog/news-1-1.jpg',
  },
  {
    date: '20 DEC',
    author: 'Admin',
    comments: 2,
    title: 'Leverage agile frameworks to provide best service',
    description: 'Read More',
    imageUrl: 'https://pixydrops.com/wostin/main-html/assets/images/blog/news-1-2.jpg',
  },
  {
    date: '20 DEC',
    author: 'Admin',
    comments: 2,
    title: 'Bring to the table win-win survival strategies to identify',
    description: 'Read More',
    imageUrl: 'https://pixydrops.com/wostin/main-html/assets/images/blog/news-1-3.jpg',
  },
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const HomeNews = () => {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <p className="text-[#A5B9AD] font-semibold text-sm flex justify-center items-center gap-2 mb-3">
          What We’re Offering{' '}
          <span className="block w-12 h-[2px] mt-2 bg-[#ECDD5E]"></span>
        </p>

        <h1 className="font-[Amatic_SC] text-4xl sm:text-5xl text-[#3C4A35] tracking-wide">
          Latest News & Articles
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index + 1}
            className="w-full md:w-1/3"
          >
            <NewsCard
              url={post.imageUrl}
              date={post.date}
              comments={post.comments}
              title={post.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeNews;
