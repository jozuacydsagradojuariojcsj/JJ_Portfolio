"use client";
import React from "react";
import Card from "../ui/Card";
import project1 from "@/app/assets/images/project1.png";

const ProjectSection = () => {
  const projectData = [
    {
      image: project1.src,
      title: "Digital Lesson Plan Management",
      text: "This project aims to make the submissions of lesson plans better.",
      buttonText: "View More ->",
      open: "Hello World",
    },
  ];
  return (
    <section className="flex flex-col items-center md:items-start min-h-dvh md:grid md:grid-cols-2 border border-red-500 p-2">
      {projectData.map((project, index) => {
        return (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            text={project.text}
            buttonText={project.buttonText}
            onClick={() => {
              console.log(`${project.open}`);
            }}
          />
        );
      })}
    </section>
  );
};

export default ProjectSection;
