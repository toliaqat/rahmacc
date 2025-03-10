import PageIntro from "@/components/PageIntro";
import React from "react";
import Image from "next/image";
import imageIftar22 from "../../images/events/Iftar22.jpg"; // You'll need to add this image to your project

const EventsPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Community Calendar"
        title="Upcoming Events"
      >
        <Image 
          src={imageIftar22}
          alt="Community events" 
          width={800} 
          height={500}
          className="rounded-lg shadow-md mt-6"
        />
      </PageIntro>
    </>
  );
};

export default EventsPage;