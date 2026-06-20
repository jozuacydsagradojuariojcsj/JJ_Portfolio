import React, { ReactNode } from "react";
import Background from "@/app/components/backgrounds/Background";
import Navbar from "../ui/Navbar";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Background>
      <div className="h-full flex flex-col items-center justify-center">
        {children}
      </div>
      <Navbar />
    </Background>
  );
};

export default Layout;
