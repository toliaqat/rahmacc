import React from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const SundaySchoolVolunteersPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Sunday School Program"
        title="Islamic Education for Children"
      >
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Volunteers Needed
            </h2>
            <p className="mt-8 text-lg text-white">
              Please complete the volunteer application form below. When filling out the form, include all relevant
              experience and qualifications. If a question is not applicable to you, please enter &quot;N/A&quot;. Be sure to provide accurate contact information
              so we can follow up with you about volunteer opportunities that match your skills and availability.
            </p>
          </div>
        </FadeIn>
      </Container>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 mt-8">
        <div className="bg-custom-beige rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Volunteer Application Form</h2>
          <p className="text-gray-600 mb-8 text-center">
            Please complete the form below to express your interest in volunteering with our Sunday School program.
          </p>
          
          <div className="flex justify-center">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfzCi0wQsZXPgh8yzOMpBI0RT3Zj-z_XMo3m6l6Ggf6Jp0o4w/viewform?embedded=true" 
              width="100%" 
              height="2357" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="max-w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SundaySchoolVolunteersPage;