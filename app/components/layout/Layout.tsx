import React, { ReactNode } from "react";
import Background from "@/app/components/backgrounds/Background";
import Navbar from "../ui/Navbar";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Background>
      <div className="h-full w-full flex items-center justify-center pb-17 sm:pt-17 sm:pb-0">
        {children}
      </div>
      <Navbar />
    </Background>
  );
};

export default Layout;
