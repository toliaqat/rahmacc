import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/Islamic_Art.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="Nurturing Spirit, Empowering Community Growth!"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        At Rahma Community Center, our services are dedicated to nurturing the spirit, empowering
        our youth, and strengthening the bonds of our community.
        We believe in creating an environment where everyone can grow, contribute, and find solace.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Spiritual and Worship Services">
             We currently host Friday (Jumu&apos;ah) prayers at our temporary rental location while we work toward establishing a permanent home. 
             Despite our transitional setting, we strive to create a welcoming environment for worship and community connection. 
             Our gatherings aim to support your faith journey and provide a space for reflection as we grow together.
            </ListItem>
            <ListItem title="Youth Empowerment Programs">
             Our youth programs are designed to inspire and empower the next generation. Through educational workshops,
             mentorship opportunities, and recreational activities, we equip young minds with the skills and confidence
             needed to lead and serve.
            </ListItem>
            <ListItem title="Community Outreach and Engagement">
             We are committed to serving our community with compassion and unity. Our outreach initiatives foster inclusivity
             and support for everyone. From local volunteer projects to global humanitarian efforts, we strive to be a beacon
             of hope and care in a diverse and interconnected world.
            </ListItem>
            <ListItem title="Educational and Development Resources">
             At Rahma Community Center at Mill Creek, learning and growth are at the heart of our mission. We offer a range of resources including seminars,
             leadership training, and counseling services designed to promote personal development and community resilience.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
