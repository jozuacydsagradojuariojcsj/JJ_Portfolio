import { TypingAnimation } from "@/components/ui/typing-animation";
import image from "@/app/assets/images/image.jpg";
const HeroSection = () => {
  const developer = image;
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row w-full text-white font-mono justify-center items-center sm:justify-evenly">
        <div className="flex flex-col">
          Hello! I am Jozua Cyd
          <TypingAnimation
            className="leading-7"
            showCursor={true}
            blinkCursor={true}
            cursorStyle="line"
            pauseDelay={1500}
            loop={false}
            words={[
              "a Backend Developer",
              "a Frontend Developer",
              "a Mobile Developer",
              "a Full-Stack Developer",
            ]}
          />
        </div>
        <div className="flex flex-col">
          <img
            className="object-cover object-top rounded-full size-50 border border-red-500"
            src={image.src}
            alt="JJ"
          />
          LinkedIn, Github Idk
        </div>
      </div>
    </>
  );
};

export default HeroSection;
