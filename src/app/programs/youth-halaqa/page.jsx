import React from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import youthHalaqaImage from "../../../images/Learning.jpg";

export const metadata = {
  title: "Youth Halaqa",
  alternates: {
    canonical: "https://rahmacc.com/programs/youth-halaqa",
  },
};

const YouthHalaqaPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Youth Halaqa Program"
        title="Islamic Learning for Young Muslims"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Youth Halaqa program aims to provide a nurturing environment for young Muslims to learn about their faith,
          build community, and develop their Islamic identity. This program is currently in development.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-8 text-lg text-white">
              We're planning to launch our Youth Halaqa program in the near future.  
              We are waiting for confirmation of location and recruiting volunteers to run the program.
            </p>
          </div>
        </FadeIn>
      </Container>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Youth Halaqa</h2>
            <p className="text-gray-600 mb-4">
              The Youth Halaqa program is being designed to provide a dedicated space for young Muslims to learn about Islamic teachings,
              history, and values in an engaging and age-appropriate way. Our vision is to nurture the spiritual growth of the next generation.
            </p>
            <p className="text-gray-600 mb-4">
              When launched, this initiative will welcome young Muslims of various age groups, offering tailored content that addresses
              their unique questions and challenges. We believe in creating a safe space where youth can explore their faith and build lasting friendships.
            </p>
            <p className="text-gray-600 mb-8">
              Stay tuned for more information about our launch date, session schedule, and registration process.
              We look forward to supporting the spiritual journey of young Muslims in our community.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={youthHalaqaImage}
              alt="Youth Halaqa learning session"
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
                <span className="text-gray-600">Provide Islamic education in an engaging and accessible format</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Create a supportive community where young Muslims can build friendships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Address contemporary challenges facing Muslim youth from an Islamic perspective</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Develop leadership skills and encourage community service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Foster a strong Islamic identity and sense of belonging</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">When will the Youth Halaqa program launch?</h3>
              <p className="text-gray-600">We&apos;re currently in the planning and development phase. We expect to launch the program in the coming months and will announce the official start date on our website and social media channels.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What age groups will the Youth Halaqa serve?</h3>
              <p className="text-gray-600">Our Youth Halaqa will be designed for different age groups, likely including pre-teens and teenagers. We plan to offer age-appropriate content and activities tailored to each group&apos;s developmental needs.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I register my child for the program?</h3>
              <p className="text-gray-600">Once launched, We&apos;ll have a registration process available on our website. We&apos;ll share specific registration details when the program is closer to launch.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What topics will be covered in the Youth Halaqa?</h3>
              <p className="text-gray-600">The curriculum will include Quranic studies, Islamic history, prophetic traditions, character development, contemporary issues, and practical application of Islamic teachings in daily life.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouthHalaqaPage;