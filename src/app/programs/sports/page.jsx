import React from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import sportsImage from "../../../images/Sports.jpg";

const SportsPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Sports Program"
        title="Physical Activity and Islamic Values"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Sports program aims to provide a healthy environment for Muslims to engage in physical activities,
          build community, and develop discipline through sports. This program is currently in development.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-8 text-lg text-white">
              We&apos;re excited to announce that our Sports program is currently in development. 
              We&apos;re working hard to create an engaging and active program that will help Muslims 
              stay physically fit while connecting with their community in a supportive environment.
            </p>
          </div>
        </FadeIn>
      </Container>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Sports Program</h2>
            <p className="text-gray-600 mb-4">
              The Sports program is being designed to provide dedicated opportunities for Muslims to engage in physical activities,
              sports competitions, and fitness training in an inclusive and Islamic environment. Our vision is to promote physical and spiritual well-being.
            </p>
            <p className="text-gray-600 mb-4">
              When launched, this initiative will welcome Muslims of various age groups and fitness levels, offering a range of activities
              that cater to different interests and abilities. We believe in creating a supportive space where community members can improve their health while building lasting friendships.
            </p>
            <p className="text-gray-600 mb-8">
              Stay tuned for more information about our launch date, activity schedule, and registration process.
              We look forward to promoting physical fitness and brotherhood/sisterhood in our community.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={sportsImage}
              alt="Sports program activities"
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
                <span className="text-gray-600">Promote physical fitness and healthy lifestyles within an Islamic framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Create a supportive community where Muslims can engage in sports together</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Develop discipline, teamwork, and sportsmanship through athletic activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Provide opportunities for friendly competition and skill development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Foster brotherhood and sisterhood through shared physical activities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">When will the Sports program launch?</h3>
              <p className="text-gray-600">We&apos;re currently in the planning and development phase. We expect to launch the program in the coming months and will announce the official start date on our website and social media channels.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What sports and activities will be offered?</h3>
              <p className="text-gray-600">Our Sports program will include a variety of activities such as basketball, soccer, volleyball, fitness training, and possibly swimming. We plan to expand our offerings based on community interest and available facilities.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I register for the program?</h3>
              <p className="text-gray-600">Once launched, we&apos;ll have a registration process available on our website. We&apos;ll share specific registration details when the program is closer to launch.</p>
            </div>
            <div className="bg-custom-beige rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will there be separate sessions for men and women?</h3>
              <p className="text-gray-600">Yes, we plan to offer separate sessions for brothers and sisters to ensure everyone can participate comfortably while adhering to Islamic principles. Some family events may also be organized.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsPage;