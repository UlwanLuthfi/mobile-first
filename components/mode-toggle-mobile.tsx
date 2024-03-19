"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ModeToggleMobile() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup type="single" defaultValue={theme}>
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system"
        onClick={() => setTheme("system")}
      >
        <LaptopIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        onClick={() => setTheme("light")}
      >
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
