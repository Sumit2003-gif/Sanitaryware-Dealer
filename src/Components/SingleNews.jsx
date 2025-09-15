import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SinglePer from './SinglePerNews';

const SingleNews = () => {
  const { id } = useParams(); // get id here

  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://pixydrops.com/wostin/main-html/assets/images/backgrounds/page-header-bg.jpg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-[Amatic_SC] uppercase tracking-widest mb-4">
            News Details
          </h1>
          <p className="text-yellow-400 font-medium text-lg">
            <Link to="/">Home</Link> <span className="mx-2">-</span> News-Details
          </p>
        </div>
      </section>
      <section>
        <SinglePer id={id} /> {/* pass id here */}
      </section>
    </div>
  );
};

export default SingleNews;
