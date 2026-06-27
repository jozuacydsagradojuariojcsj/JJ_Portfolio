import React from "react";
import image from "@/app/assets/images/image.jpg";

const AboutMeSection = () => {
  return (
    <main className="font-mono flex flex-col sm:flex-row text-center items-center border border-yellow-500 h-full w-full overflow-y-auto text-xs z-5">
      <img
        className="object-cover object-top rounded-full sm:rounded-3xl size-50 lg:size-100 border-5 border--popover-icon shadow-gray-700 shadow-lg"
        src={image.src}
        alt="JJ"
      />
      <div className="flex flex-col gap-y-5 p-2">
        <h1 className="font-bold text-base">
          Hello I am Jozua Cyd Juario a developer based in Philippines
        </h1>
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
    </main>
  );
};

export default AboutMeSection;
