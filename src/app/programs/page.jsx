import PageIntro from "@/components/PageIntro";
import React from "react";
import imageRamadan from "../../images/Ramadan.jpeg";
import Image from "next/image";
import CopyButton from "@/components/CopyButton";
import Link from "next/link";
import Button from "../../components/Button";

const ProgramsPage = () => {
  const programs = [
    {
      id: "sunday-school",
      name: "Sunday School",
      description: "Islamic education for children every Sunday.",
    },
    {
      id: "open-kitchen",
      name: "Open Kitchen",
      description: "Community meal service program for those in need.",
    },
    {
      id: "youth-halaqa",
      name: "Youth Halaqa",
      description: "Weekly gathering for youth to discuss Islamic topics.",
    },
    {
      id: "robotics",
      name: "Robotics",
      description: "STEM program focusing on robotics and technology.",
    },
    {
      id: "sports",
      name: "Sports",
      description: "Various sports activities for community members of all ages.",
    },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Our Programs"
        title="Enriching Our Community"
      >
        <p className="mt-4 text-lg text-gray-600">
          Explore the various programs we offer to serve and strengthen our community.
          Click on any program to learn more about its schedule, activities, and how to participate.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Button href={`/programs/${program.id}`}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgramsPage;