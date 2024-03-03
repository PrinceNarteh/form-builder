"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs } from "./ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  if (!mounted) return null;

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <Tabs default={theme}>
      <TabsList className="border">
        <TabsTrigger
          value="theme"
          onClick={() => setTheme("light")}
        ></TabsTrigger>
      </TabsList>
      ThemeSwitcher
    </Tabs>
  );
};

export default ThemeSwitcher;
