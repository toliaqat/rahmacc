import React from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import openKitchenImage from "../../../images/Food.jpg"; // You&apos;ll need to replace this image with an appropriate one

const OpenKitchenPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Open Kitchen Program"
        title="Community Meals & Food Assistance"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Open Kitchen program aims to provide nutritious meals to those in need within our community,
          fostering connection and support in a dignified environment. This program is currently in development.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-8 text-lg text-white">
              We&apos;re excited to announce that our Open Kitchen program is currently in development. 
              We&apos;re working hard to create a sustainable community food assistance program that will serve 
              nutritious meals in a welcoming environment for all who need it.
            </p>
          </div>
        </FadeIn>
      </Container>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Open Kitchen</h2>
            <p className="text-gray-600 mb-4">
              The Open Kitchen program is being designed to address food insecurity in our community while creating
              a space for connection and support. Our vision is to provide regular meals prepared with care and served with dignity.
            </p>
            <p className="text-gray-600 mb-4">
              When launched, this initiative will welcome anyone in need of a meal, regardless of background or circumstance.
              We believe that sharing food is a powerful way to build community and provide essential support.
            </p>
            <p className="text-gray-600 mb-8">
              Stay tuned for more information about our launch date, meal schedule, and volunteer opportunities.
              We look forward to serving our community through this important program.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={openKitchenImage}
              alt="Open Kitchen community meal preparation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Goals section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Provide nutritious meals to community members in need</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Create a welcoming space that preserves dignity and fosters connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Build partnerships with local food suppliers and community organizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Reduce food waste through thoughtful meal planning and preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600">Engage community volunteers in meaningful service opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">When will the Open Kitchen program launch?</h3>
              <p className="text-gray-600">We are currently in the planning and development phase. We expect to launch the program in the coming months and will announce the official start date on our website and social media channels.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Who can access the Open Kitchen services?</h3>
              <p className="text-gray-600">Our Open Kitchen will be available to anyone in need of a meal, regardless of background, faith, or circumstance. We believe in serving our entire community with dignity and respect.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I support this initiative?</h3>
              <p className="text-gray-600">Once launched, we&apos;ll need volunteers to help prepare and serve meals, as well as donations of food items and funds. We&apos;ll share specific ways to contribute when the program is closer to launch.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Will dietary restrictions be accommodated?</h3>
              <p className="text-gray-600">Yes, we plan to offer options that accommodate common dietary restrictions and cultural preferences whenever possible. All meals will be prepared according to halal guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenKitchenPage;