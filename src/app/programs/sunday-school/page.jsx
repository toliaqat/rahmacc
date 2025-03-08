import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";
import sundaySchoolImage from "../../../images/Quran.jpg";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn"
const SundaySchoolPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Sunday School Program"
        title="Islamic Education for Children"
      >
        <p className="mt-4 text-lg text-gray-600">
          Our Sunday School program provides comprehensive Islamic education for children of all ages,
          focusing on Quran, Islamic studies, and character development in a nurturing environment.
        </p>

      </PageIntro>

        
    <Container className="mt-8">
        <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Volunteers Needed
            </h2>
            <p className="mt-8 text-lg text-white">
              We are currently looking for dedicated volunteers to join our Sunday School team as teachers, administrative staff, and classroom assistants. 
              If you have a passion for Islamic education and working with children, we&apos;d love to have you contribute to our growing program.
            </p>
            <Button href="/programs/sunday-school-volunteers" className="mt-8" invert="true">
              Volunteer Now
            </Button>
          </div>
        </FadeIn>
      </Container>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mt-8">
        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Sunday School</h2>
            <p className="text-gray-600 mb-4">
              Our Sunday School program is designed to provide children with a strong foundation in Islamic knowledge and values.
              Classes are held every Sunday from 10:00 AM to 1:00 PM and are divided by age groups to ensure appropriate learning experiences.
            </p>
            <p className="text-gray-600 mb-4">
              Our curriculum includes Quran recitation and memorization, Islamic studies, Arabic language, and character development.
              Our qualified teachers are dedicated to creating an engaging and supportive learning environment.
            </p>
            <p className="text-gray-600 mb-8">
              We welcome children ages 5-15 to join our program. Registration is open throughout the year, with main enrollment periods
              at the beginning of each semester.
            </p>
            <Button href="/programs/sunday-school-students-applications" className="mt-4">
              Student Application
            </Button>

          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src={sundaySchoolImage}
              alt="Children in Sunday School class"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Schedule section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Class Schedule</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age Group</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ages 5-7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 1:00 PM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Basic Quran, Islamic Stories, Arabic Alphabet</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ages 8-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 1:00 PM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Quran Reading, Islamic Studies, Arabic Language</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ages 12-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM - 1:00 PM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Quran Tajweed, Advanced Islamic Studies, Arabic Conversation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What should my child bring to Sunday School?</h3>
              <p className="text-gray-600">Students should bring their Quran, notebooks, pencils, and a water bottle. All other materials will be provided.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a fee for the Sunday School program?</h3>
              <p className="text-gray-600">Yes, there is a nominal fee to cover educational materials and facility costs. Scholarships are available for families in need.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do parents need to stay during class time?</h3>
              <p className="text-gray-600">Parents are not required to stay during class time, but are welcome to participate in adult education programs that run concurrently.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How can I volunteer for the Sunday School program?</h3>
              <p className="text-gray-600">We welcome volunteers! Please contact our education coordinator through the Contact page to discuss volunteer opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SundaySchoolPage;