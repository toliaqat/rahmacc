import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Reach out to us!
          </h2>
          <div className="mt-6 flex">
            <Button href={"/contact"} invert>
              Say Salaam
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
