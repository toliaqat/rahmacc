import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";
import Image from "next/image";
import ihabImage from "../../images/team/Ihab.jpg";
import gussanImage from "../../images/team/Gussan.jpg";
import hichamImage from "../../images/team/Hicham.jpg";
import safdarImage from "../../images/team/Safdar.jpg";
import imadImage from "../../images/team/Imad.jpg";
import anasImage from "../../images/team/Anas.jpg";
import khaledImage from "../../images/team/Khaled.png";
import touseefImage from "../../images/team/Touseef.jpg";

// Board members data
const boardMembers = [
  {
    name: "Ihab Bounani",
    title: "President",
    image: ihabImage,
  },
  {
    name: "Ghassan Marouf ",
    title: "Vice President",
    image: gussanImage,
  },
  {
    name: "Hicham Abaoubida",
    title: "Secretary",
    image: hichamImage,
  },
  {
    name: "Safder Meah",
    title: "Treasurer",
    image: safdarImage,
  },
  {
    name: "Imad Iqbal",
    title: "Community Outreach Director",
    image: imadImage,
  },
  {
    name: "Anas Kattan",
    title: "Board Member",
    image: anasImage,
  },
  {
    name: "Khaled Anntar",
    title: "Board Member",
    image: khaledImage,
  },
  {
    name: "Touseef Liaqat",
    title: "Board Member",
    image: touseefImage,
  },
];

// Board Member component
function BoardMember({ member }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-display text-lg font-semibold text-neutral-950">
        {member.name}
      </h3>
      <p className="text-sm text-neutral-700">{member.title}</p>
    </div>
  );
}

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At Rahma Community Center, we are dedicated to fostering a welcoming
            environment that nurtures both the spirit and the community.
            Rooted in Islamic values and a deep commitment to social harmony,
            our center is more than just a place of worship—it’s a vibrant hub
            for personal growth, community engagement, and youth empowerment.
          </p>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Our mission
          </h2>
          <p>
            Our mission is to create a sanctuary where individuals and families come together to explore,
            learn, and grow. We strive to provide resources that support spiritual development, educational
            enrichment, and social connection, ensuring that everyone who walks through our doors feels valued,
            supported, and inspired.
          </p>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Our Vision
          </h2>
          <p>
            We envision a future where our community stands united, embracing diversity and
            nurturing the potential of every individual. At Rahma Community Center, we believe
            that by strengthening our spiritual and social foundations, we can build a more
            compassionate and resilient society—a global village that cares, supports, and grows together.
          </p>
        </div>
      </PageIntro>

      {/* Board Members Section */}
      <Container className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-10 text-center">
          Our Board Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
          {boardMembers.map((member, index) => (
            <BoardMember key={index} member={member} />
          ))}
        </div>
      </Container>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
