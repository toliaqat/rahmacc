import React from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

const SundaySchoolStudentsApplicationPage = () => {
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
              Student Registration
            </h2>
            <p className="mt-8 text-lg text-white">
              Please complete the student application form below to enroll your child in our Sunday School program. 
              When filling out the form, include all requested information about your child. If a question is not 
              applicable, please enter &quot;N/A&quot;. Be sure to provide accurate contact information so we can communicate 
              important updates about classes, events, and your child&apos;s progress.
            </p>
          </div>
        </FadeIn>
      </Container>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 mt-8">
        <div className="bg-custom-beige rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Application Form</h2>
          <p className="text-gray-600 mb-8 text-center">
            Please complete the form below to register your child for our Sunday School program.
          </p>
          
          <div className="flex justify-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpwg--oUwMcYZmKFEfOoTtULS3pfbPT76fdCYfgUeJh66_8Q/viewform?embedded=true" width="640" height="2099" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SundaySchoolStudentsApplicationPage;