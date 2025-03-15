import PageIntro from "@/components/PageIntro";
import React from "react";
import imageRamadan from "../../images/Ramadan.png";
import imageQuran from "../../images/Quran.jpg";
import imageKaaba from "../../images/Kaaba.jpg";
import imageBlossams from "../../images/Blossams.jpg";
import Image from "next/image";

export const metadata = {
  title: "Rahma Community Center Blog - Islamic News, Events, and Articles",
  description: "Discover the latest Islamic news, events, and stories from Rahma Community Center. Stay informed and engaged with our community activities and Islamic teachings.",
  alternates: {
    canonical: "https://rahmacc.com/blog",
  },
};

const BlogPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Rahma Community Center"
        title="Our Blog"
      >
        <p className="mt-4 text-lg text-gray-600">
          Stay updated with the latest news, events, and stories from Rahma Community Center.
          Explore our articles to learn more about our activities, Islamic knowledge, and impact in the community.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-10">
          <h2 className="text-2xl text-neutral-900 font-bold mb-6">Categories</h2>
          <div className="flex flex-wrap gap-3">
            <a href="/blog#" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">Events</a>
            <a href="/blog#" className="px-4 py-2 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors">Aqeedah</a>
            <a href="/blog#" className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full hover:bg-amber-200 transition-colors">Fiqh</a>
            <a href="/blog#" className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors">Community</a>
            <a href="/blog#" className="px-4 py-2 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors">Youth</a>
            <a href="/blog#" className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full hover:bg-teal-200 transition-colors">Quran</a>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <h2 className="text-2xl text-neutral-900 font-bold mb-6">Featured Article</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden lg:flex">
            <div className="relative lg:w-1/2 h-64 lg:h-auto">
              <Image 
                src={imageQuran} 
                alt="Quran and Islamic Belief - Understanding Tawheed" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:w-1/2">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Aqeedah</span>
                <p className="text-sm text-gray-500 ml-3">March 3, 2025</p>
              </div>
              <h3 className="text-2xl text-neutral-900 font-semibold mb-3">Tawhid 101: The Foundation of Islamic Belief</h3>
              <p className="text-gray-600 mb-4">An in-depth exploration of the concept of Tawheed (the Oneness of Allah) and its significance in Islamic theology.</p>
              <a href="/blog/understanding-tawheed" className="text-blue-600 hover:text-blue-800 font-medium">Read full article →</a>
            </div>
          </div>
        </div>

        {/* Recent Articles */}
        <h2 className="text-2xl text-neutral-900 font-bold mb-6">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={imageRamadan} 
                alt="Ramadan Celebration at Rahma Community Center" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Events</span>
                <p className="text-sm text-gray-500 ml-3">May 15, 2023</p>
              </div>
              <h3 className="text-xl text-neutral-900 font-semibold mb-2">Ramadan Celebrations at Rahma</h3>
              <p className="text-gray-600 mb-4">Our community came together for a beautiful iftar celebration during the holy month of Ramadan.</p>
              <a href="/blog/ramadan-celebrations" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={imageKaaba} 
                alt="Islamic Prayer Guidance - Fiqh of Prayer" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Fiqh</span>
                <p className="text-sm text-gray-500 ml-3">April 28, 2023</p>
              </div>
              <h3 className="text-xl text-neutral-900 font-semibold mb-2">The Fiqh of Prayer: Common Questions Answered</h3>
              <p className="text-gray-600 mb-4">A comprehensive guide addressing frequently asked questions about prayer in Islam, written by Sister Aisha Johnson.</p>
              <a href="/blog/fiqh-of-prayer" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
          </div>

          {/* Article 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={imageQuran} 
                alt="Quran Reflection - Surah Al-Asr" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Quran</span>
                <p className="text-sm text-gray-500 ml-3">March 25, 2023</p>
              </div>
              <h3 className="text-xl text-neutral-900 font-semibold mb-2">Reflections on Surah Al-Asr</h3>
              <p className="text-gray-600 mb-4">A deep dive into the meanings and lessons of Surah Al-Asr, exploring its relevance to our daily lives.</p>
              <a href="/blog/surah-al-asr" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
          </div>

          {/* Article 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={imageBlossams} 
                alt="Islamic Ethics in Modern World" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Aqeedah</span>
                <p className="text-sm text-gray-500 ml-3">February 28, 2023</p>
              </div>
              <h3 className="text-xl text-neutral-900 font-semibold mb-2">Islamic Ethics in the Modern World</h3>
              <p className="text-gray-600 mb-4">Exploring how Islamic ethical principles can guide Muslims in navigating contemporary challenges.</p>
              <a href="/blog/islamic-ethics" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-l-md hover:bg-gray-50">Previous</a>
            <a href="#" className="px-4 py-2 bg-blue-600 text-white border border-blue-600">1</a>
            <a href="#" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-r-md hover:bg-gray-50">Next</a>
          </nav>
        </div>

        {/* Contribute CTA */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Knowledge</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Are you knowledgeable about Islam and interested in contributing to our blog? We welcome articles from community members and volunteers on various Islamic topics.</p>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us to Contribute
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
