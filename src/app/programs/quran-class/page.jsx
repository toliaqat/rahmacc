import React from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import quranClassImage from "../../../images/Quran.jpg";

export const metadata = {
  title: "Quran Class",
  alternates: {
    canonical: "https://rahmacc.com/programs/quran-class",
  },
};

const QuranClassPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Quran Class Program"
        title="Learning and Living the Divine Words"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Quran Class program will offer comprehensive Quranic education for all ages, focusing on proper recitation,
          memorization, and understanding of the Holy Quran in a supportive Islamic environment. This program is currently in development.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-8 text-lg text-white">
              We&apos;re planning to launch our Quran Class program in the near future. 
              We are currently waiting for location confirmation and recruiting volunteers to run the program. 
              Once these preparations are complete, we look forward to offering a comprehensive program to help Muslims 
              connect with the Holy Quran through proper recitation, memorization, and understanding.
            </p>
          </div>
        </FadeIn>
      </Container>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Upcoming Quran Class Program</h2>
            <p className="text-gray-600 mb-4">
              The Quran Class program is being designed to provide structured learning opportunities for Muslims of all ages to connect with the 
              Holy Quran. Our qualified instructors will be well-versed in tajweed rules and traditional methods of Quranic education.
            </p>
            <p className="text-gray-600 mb-4">
              When launched, we will offer classes for beginners learning to read Arabic, intermediate students focusing on tajweed rules and proper 
              pronunciation, and advanced learners working on memorization (hifz) and deeper understanding of the Quranic text.
            </p>
            <p className="text-gray-600 mb-8">
              Stay tuned for more information about our launch date, class schedule, and registration process.
              We look forward to helping our community build a stronger connection with Allah&apos;s words.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={quranClassImage}
              alt="Quran class activities"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Goals section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals</h2>
          <div className="bg-custom-beige rounded-lg shadow-md overflow-hidden p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Develop proper Quranic recitation skills with correct tajweed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Facilitate memorization of the Holy Quran for students of all ages</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Foster understanding of Quranic meanings and their application in daily life</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Build a strong spiritual connection with the Book of Allah</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Create a supportive community of Quran learners who encourage one another</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-custom-beige rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">When will the Quran Class program launch?</h3>
              <p className="text-gray-600">We&apos;re currently in the planning and development phase. We expect to launch the program in the coming months and will announce the official start date on our website and social media channels.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What levels of Quran classes will you offer?</h3>
              <p className="text-gray-600">We plan to offer classes for beginners (Qaida and basic Arabic reading), intermediate (tajweed and proper recitation), and advanced (hifz/memorization and tafsir/interpretation) students.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What age groups will be able to participate?</h3>
              <p className="text-gray-600">We will have classes for children (ages 5+), teenagers, and adults. Each age group will have a curriculum tailored to their learning needs and capabilities.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I register for the program?</h3>
              <p className="text-gray-600">Once launched, we&apos;ll have a registration process available on our website. We&apos;ll share specific registration details when the program is closer to launch.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will there be separate classes for men and women?</h3>
              <p className="text-gray-600">Yes, we plan to offer separate classes for brothers and sisters to ensure everyone can learn comfortably while adhering to Islamic principles. Children&apos;s classes will be mixed until a certain age.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuranClassPage;