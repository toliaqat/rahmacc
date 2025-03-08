import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

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
