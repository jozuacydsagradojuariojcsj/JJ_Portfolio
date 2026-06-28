import React, { ReactNode } from "react";
import LightRays from "./effects/LightRays";
import SideRays from "./effects/SideRays";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative h-dvh w-full bg-background">
      <div className="absolute inset-0">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
        {/* <LightRays
          raysOrigin="top-center"
          raysColor="#3F00FF"
          raysSpeed={1}
          lightSpread={1}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.05}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1.2}
          saturation={1}
        /> */}
      </div>
      {children}
    </div>
  );
};

export default Background;
