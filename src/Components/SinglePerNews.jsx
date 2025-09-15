import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from './NewsData';

const SinglePerNews = () => {
  const { id } = useParams();

  // Find the news item matching the id from params
  const newsItem = newsData.find((item) => item.id.toString() === id);

  // Handle case when news item is not found
  if (!newsItem) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">News not found</h2>
        <Link to="/news" className="text-green-600 hover:underline">
          Back to news list
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <img 
        src={newsItem.url} 
        alt={newsItem.title} 
        className="w-full h-64 object-cover rounded-md mb-6" 
        loading="lazy"
      />

      <div className="mb-4 text-gray-600 flex gap-6">
        <time className="mr-4" dateTime={newsItem.date}>
          Date: {newsItem.date}
        </time>
        <span>Comments: {newsItem.comments}</span>
      </div>

      <h1 className="text-3xl font-bold text-[#2F3A2D] mb-6">{newsItem.title}</h1>

      <p className="text-gray-700 leading-relaxed">
        {newsItem.content || 'Detailed content about the news goes here...'}
      </p>

      <Link
        to="/news"
        className="inline-block mt-8 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Back to News
      </Link>
    </article>
  );
};

export default SinglePerNews;
