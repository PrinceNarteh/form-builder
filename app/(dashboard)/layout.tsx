import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between border-b border-border h-14 px-4 py-y bg-red-500">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-fit flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
