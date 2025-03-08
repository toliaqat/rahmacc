import PageIntro from "@/components/PageIntro";
import React from "react";
import imageRamadan from "../../images/Ramadan.jpeg";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";

const DonatePage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Support Our Mission"
        title="Ways to Contribute"
      >
        <p className="mt-4 text-lg text-gray-600">
          Your generous donations help us continue our mission and support our community programs.
          Please consider donating through one of the methods below.
        </p>
      </PageIntro>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Venmo */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-12 w-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">V</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Venmo</h3>
            <p className="mb-4 text-gray-900">@RAHMA-CommunityCenter</p>
            <a 
              href="https://venmo.com/RAHMA-CommunityCenter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Donate with Venmo
            </a>
          </div>

          {/* Zelle */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-12 w-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">Z</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Zelle</h3>
            <p className="mb-4 text-gray-900">rahmacc.board@gmail.com</p>
            <CopyButton 
              textToCopy="rahmacc.board@gmail.com" 
              className="inline-block bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors"
              buttonText="Copy Email"
            />
          </div>

          {/* PayPal */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="h-12 w-12 mx-auto mb-4 bg-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">PayPal</h3>
            <p className="mb-4 text-gray-900">RahmaCommunityCenter</p>
            <a 
              href="https://paypal.me/RahmaCommunityCenter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Donate with PayPal
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Thank You For Your Support</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Your donations make a significant impact in our community. All contributions help fund our programs, 
            events, and initiatives that benefit those in need.
          </p>
        </div>
      </div>
    </>
  );
};

export default DonatePage;