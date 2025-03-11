import Image from "next/image";
import logoBrightPath from "../images/clients/bright-path/logo-light.svg";
import logoFamilyFund from "../images/clients/family-fund/logo-light.svg";
import logoGreenLife from "../images/clients/green-life/logo-light.svg";
import logoHomeWork from "../images/clients/home-work/logo-light.svg";
import logoMailSmirk from "../images/clients/mail-smirk/logo-light.svg";
import logoNorthAdventures from "../images/clients/north-adventures/logo-light.svg";
import logoPhobiaLight from "../images/clients/phobia/logo-light.svg";
import logoUnseal from "../images/clients/unseal/logo-light.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Phobia", logoPhobiaLight],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Our Mosque
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
        <p className="mt-6 text-xl text-white text-neutral-600">
            At Rahma Community Center, we believe in nurturing both the spirit and the community.
            Rooted in Islamic values, our center is a refuge for Muslims and a welcoming space
            for everyone interested in building a brighter future together.
          </p>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
