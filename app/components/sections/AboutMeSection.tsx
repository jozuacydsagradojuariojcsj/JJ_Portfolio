import React from "react";
import image from "@/app/assets/images/image.jpg";

const AboutMeSection = () => {
  return (
    <section className="font-mono flex flex-col md:flex-row md:justify-evenly min-h-dvh items-start z-5 p-2 text-foreground border border-yellow-500 gap-5">
      <div className="flex flex-col gap-y-5 text-xs sm:text-base md:text-center w-full">
        <h1 className="text-4xl font-bold pb-5">About Me</h1>
        <h2 className="font-bold text-base sm:text-2xl">
          Hello I am Jozua Cyd Juario a developer based in Philippines
        </h2>
        <p>
          Good Day, I am Jozua Cyd a developer based in Philippines, in Cagayan
          de Oro City.
          <br />I am a Full-Stack Developer to be exact, that focuses more in
          the backend side of development specializing in Django, though
          recently I am now more inclined in learning frontend developing with
          React, Next.js and Tailwind CSS to create a good user experience
        </p>
        <p>
          I also do Mobile Development with Flutter and React Native, software
          deployment, deploying applications to the cloud with Cloudflare and
          connecting them to the software that I built. I also dabble now in
          automations, though nothing grand just simple ones.
        </p>
        <p>
          Another thing I'd also like to share is I like to talk to people about
          development as I encounter many things that I still have not yet
          learned, talking to them also about system design gives me ideas that
          I never would have thought about before.
        </p>
      </div>
      <div className="flex flex-col md:text-center w-full">
        <h1 className="text-4xl font-bold pb-5">Technologies</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold">Frontend</h3>
            <p>React</p>
            <p>Next.js</p>
            <p>TypeScript</p>
          </div>

          <div>
            <h3 className="font-bold">Backend</h3>
            <p>Django</p>
            <p>Express.js</p>
          </div>

          <div>
            <h3 className="font-bold">Database</h3>
            <p>PostgreSQL</p>
            <p>MySQL</p>
          </div>

          <div>
            <h3 className="font-bold">Tools</h3>
            <p>Git</p>
            <p>Docker</p>
          </div>
          <div>
            <h3 className="font-bold">Mobile</h3>
            <p>Flutter</p>
            <p>React Native</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
