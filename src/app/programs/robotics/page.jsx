import React from "react";
import Image from "next/image";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
import roboticsImage from "../../../images/Robotics.jpg"; // You&apos;ll need to replace this with an appropriate robotics image

const RoboticsPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Robotics Program"
        title="Building Future Innovators Through Technology"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Robotics program prepares Muslim youth for academic and professional excellence through competitive robotics. 
          We organize teams for the prestigious FIRST Tech Challenge (FTC), developing technical skills, leadership abilities, 
          and entrepreneurial mindsets in an Islamic environment.
        </p>
      </PageIntro>

      <Container className="mt-8">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Coming Soon: FIRST Tech Challenge Teams
            </h2>
            <p className="mt-8 text-lg text-white">
              We&apos;re excited to announce that our Robotics program is launching with a focus on the prestigious FIRST Tech Challenge (FTC).
              This internationally recognized competition has helped countless students secure admissions to top universities including MIT, 
              Stanford, and Ivy League schools. Join us to build more than robots—build your future.
            </p>
          </div>
        </FadeIn>
      </Container>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Launching Your College and Career Journey</h2>
            <p className="text-gray-600 mb-4">
              Our Robotics program centers around the FIRST Tech Challenge (FTC), one of the most prestigious robotics competitions globally. 
              FTC participants consistently gain admission to elite universities, with many receiving substantial scholarships. This isn&apos;t just about building robots—it&apos;s about building your future.
            </p>
            <p className="text-gray-600 mb-4">
              Participating in our program simulates running a startup. Teams manage budgets, create business plans, develop marketing strategies, 
              and pitch to judges—all while designing, building, and programming competition robots. These entrepreneurial and leadership experiences 
              are exactly what top colleges and employers seek in candidates.
            </p>
            <p className="text-gray-600 mb-8">
              Our program welcomes Muslims of all skill levels, providing comprehensive training in engineering, programming, business development, 
              and leadership—all within an Islamic framework that emphasizes ethical innovation and collaboration. Join us to develop the skills that 
              will distinguish you in college applications and beyond.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={roboticsImage}
              alt="Students competing in FIRST Tech Challenge"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Goals section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Benefits</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600"><strong>College Preparation:</strong> FTC participation is highly regarded by admissions officers at elite universities, with many participants receiving scholarships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600"><strong>Entrepreneurial Experience:</strong> Gain real-world startup experience through team management, budgeting, and marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600"><strong>Leadership Development:</strong> Cultivate project management, team coordination, and public speaking skills essential for future success</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600"><strong>Technical Mastery:</strong> Develop expertise in engineering, programming, CAD design, and problem-solving through hands-on application</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span className="text-gray-600"><strong>Islamic Environment:</strong> Pursue technical excellence while maintaining Islamic principles and building brotherhood/sisterhood</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What is the FIRST Tech Challenge (FTC)?</h3>
              <p className="text-gray-600">FTC is an internationally recognized robotics competition for students in grades 7-12. Teams design, build, program, and operate robots to compete in a head-to-head challenge. FTC is known for opening doors to prestigious universities and scholarship opportunities.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How does this program help with college admissions?</h3>
              <p className="text-gray-600">FTC participation demonstrates to college admissions officers that you possess technical skills, leadership abilities, teamwork experience, and project management capabilities. Many top universities specifically look for FIRST robotics experience, and some offer substantial scholarships to participants.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do I need prior robotics experience?</h3>
              <p className="text-gray-600">No prior experience is necessary! Our program provides comprehensive training for beginners while challenging advanced participants. Teams need diverse skills—from programming and engineering to business planning, marketing, and leadership—so there&apos;s a role for everyone.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How does the program develop entrepreneurial skills?</h3>
              <p className="text-gray-600">FTC teams function like small startups. Participants manage budgets, develop business plans, create marketing materials, fundraise, maintain engineering notebooks, and pitch their work to judges. This hands-on experience provides invaluable preparation for future business ventures or careers.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticsPage;