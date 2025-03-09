import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32 mx-6 sm:mx-6 md:mx-8">
      <SectionIntro
        eyebrow="Our culture"
        title="A diverse community united by compassion, faith, and mutual respect."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Dedication" invert>
            Our team and volunteers are passionately devoted to serving the community, striving every day to support,
            uplift, and inspire one another.
          </GridListItem>
          <GridListItem title="Community" invert>
            We cherish the deep bonds that unite us, fostering an inclusive space where differences are celebrated
            and everyone feels at home.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            Guided by the spirit of compassion, we understand that each individual&apos;s journey is unique, and we make it
            our mission to care for one another through life&apos;s challenges.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
