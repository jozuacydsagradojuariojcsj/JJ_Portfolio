import { TypingAnimation } from "@/components/ui/typing-animation";
import image from "@/app/assets/images/image.jpg";
const HeroSection = () => {
  const developer = image;
  return (
    <section className="flex flex-col sm:flex-row min-h-dvh justify-center items-center sm:justify-evenly font-mono text-foreground">
      <div className="flex flex-col w-full items-center justify-center">
        <img
          className="object-cover object-top rounded-full size-50 lg:size-100 border-5 border--popover-icon shadow-gray-700 shadow-lg"
          src={image.src}
          alt="JJ"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 w-full text-xl  md:text-4xl lg:text-5xl">
        Hello! I am Jozua Cyd
        <TypingAnimation
          className="leading-7 md:leading-10"
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
        <div className="text-xs sm:text-sm px-4">
          I am a Full-Stack Developer with more specialization in backend
          developing and system design.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
