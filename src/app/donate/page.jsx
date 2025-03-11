import PageIntro from "@/components/PageIntro";
import React from "react";
import imageRamadan from "../../images/Ramadan.jpeg";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";

const DonatePage = () => {
  return (
    <>
    <div className="bg-white">
      <PageIntro
        eyebrow="Support Our Mission"
        title="Ways to Contribute"
      >
        <p className="mt-4 text-lg text-gray-600">
          Your generous donations help us continue our mission and support our community programs.
          Please consider donating through one of the methods below.
        </p>
      </PageIntro>
      
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-[601px]">
          <iframe 
            src="https://givebutter.com/embed/c/rahmacc" 
            width="100%" 
            height="488px" 
            style={{overflow: "hidden"}} 
            name="givebutter" 
            frameBorder="0" 
            scrolling="no" 
            seamless="" 
            allowPaymentRequest="" 
            id="iFrameResizer0"
          ></iframe>
          <script src="https://givebutter.com/js/widget.js" async></script>
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