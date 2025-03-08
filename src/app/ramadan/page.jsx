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
      </PageIntro>
    </>
  );
};

export default RamadanPage;
