import PageIntro from "@/components/PageIntro";
import React from "react";
import imageRamadan from "../../images/Ramadan.jpeg";
import Image from "next/image";

const RamadanPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Ramadan Calendar"
        title="Ramadan Kareem!"
      >
        <Image 
          src={imageRamadan}
          alt="Ramadan celebration" 
          width={800} 
          height={500}
          className="rounded-lg shadow-md mt-6"
        />
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-semibold mb-4">Ramadan Timer</h2>
          <iframe 
            src="https://ramadantimer.com/" 
            title="Ramadan Timer"
            className="w-full border-0 rounded-lg shadow-md" 
            height="900"
            loading="lazy"
          />
        </div>
      </PageIntro>
    </>
  );
};

export default RamadanPage;
