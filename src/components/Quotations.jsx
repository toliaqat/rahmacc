import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";
import imageIslamicArt from "../images/Quran.jpg";
import StylizedImage from "@/components/StylizedImage";

const Quotations = ({ children, title, className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn className="w-full max-w-[33.75rem] lg:w-[45rem] flex-none">
            <StylizedImage
              shape={2}
              src={imageIslamicArt}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
          <FadeIn>
            <figure className="mx-auto max-w-4xl">
              <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                  {children}
                </p>
              </blockquote>
              <figcaption className="mt-10">
              <h1 className="text-center font-display font-semibold tracking-wider sm:text-left">
                {title}
              </h1>
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </Container>


    </div>
  );
};

export default Testimonials;
