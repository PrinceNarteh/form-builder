import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav>
        <Logo />
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/sign-in" />
      </nav>
      <main className="flex w-fit flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
