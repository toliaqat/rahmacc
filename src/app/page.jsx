import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import imageIslamicArt from "../images/Mosque.jpg";
import StylizedImage from "@/components/StylizedImage";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
      <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
             A Vibrant Hub for Spiritual, Educational, and Community Growth!
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
            At Rahma Community Center, we believe in nurturing both the spirit and the community.
            Rooted in Islamic values, our center is a sanctuary for Muslims and a welcoming space
            for everyone interested in building a brighter future together.
            </p>
          </FadeIn>
          
          <FadeIn className="w-full max-w-[33.75rem] lg:w-[45rem] flex-none">
            <StylizedImage
              shape={1}
              src={imageIslamicArt}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
            />
          </FadeIn>
        </div>
      </Container>
        <Testimonials
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Quran 2:177"
        >
          Righteousness is not that you turn your faces toward the east or the west, 
          but [true] righteousness is in one who believes in Allah, the Last Day,
          the Angels, the Book, and the Prophets and gives his wealth, in spite
          of love for it, to relatives, orphans, the needy, the traveler, those
          who ask [for help], and for freeing slaves.
        </Testimonials>
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Prayer Times!
              </h2>
              <h3 className="font-display text-base font-semibold text-white mt-4">
                Jumu&apos;ah Prayer: 1:30pm
              </h3>
              <div className="mt-1 border-t border-white/10 pt-10">
                <div className="flex flex-col md:flex-row  items-center">

                    {/* Moon Phase Widget */}
                    <div className="md:flex-1 flex justify-center">
                      <table cellPadding="0" cellSpacing="0" border="0" width="130" height="195">
                        <tr>
                          <td align="center">
                            <img src="https://www.moonmodule.com/cs/dm/s.gif" width="1" height="190" border="0" alt="" />
                          </td>
                          <td background="https://www.moonmodule.com/cs/dm/vn.gif" valign="bottom" align="center">
                            <a href="https://www.moonconnection.com" target="mc_moon_ph">
                              <img src="https://www.moonmodule.com/cs/dm/s.gif" width="128" height="250" border="0" alt="" />
                            </a>
                            
                            <img src="https://www.moonmodule.com/cs/dm/s.gif" width="1" height="4" border="0" alt="" />
                          </td>
                          <td>
                            <img src="https://www.moonmodule.com/cs/dm/s.gif" width="1" height="196" border="0" alt="" />
                          </td>
                        </tr>
                      </table>
                    </div>
                  
                  {/* Prayer Widget */}
                  <div className="md:flex-1">
                    <iframe 
                      id="iframe" 
                      title="prayerWidget" 
                      className="widget-m-top w-full" 
                      style={{ 
                        height: "358px",
                        maxWidth: "700px",
                        border: "none",
                        borderRadius: "0.5rem",
                        backgroundColor: "transparent"
                      }} 
                      scrolling="no" 
                      src="https://www.islamicfinder.org/prayer-widget/5803457/shafi/5/0/15.0/15.0"
                    />
                  </div>
                </div>
                <div className="mt-6 text-white/70 text-sm text-center px-4">
                  <p>Prayer times are provided by IslamicFinder using Shafi / Hanbali / Maliki juristic settings.</p>
                  <p className="mt-1">Please note that Iqama times at Rahma Community Center may differ from the calculated prayer times shown above.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      <Services />
      <ContactSection />
    </main>
  );
}
