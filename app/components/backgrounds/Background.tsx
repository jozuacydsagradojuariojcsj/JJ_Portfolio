import React, { ReactNode } from "react";
import LightRays from "./effects/LightRays";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative h-dvh w-dvw justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <LightRays
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
        />
      </div>
      {children}
    </div>
  );
};

export default Background;
