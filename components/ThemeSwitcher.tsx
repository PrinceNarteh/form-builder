"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Tabs } from "./ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CloudSunIcon, SunIcon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  if (!mounted) return null;

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border">
        <TabsTrigger value="theme" onClick={() => setTheme("light")}>
          <SunIcon className="size-[1.2rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
