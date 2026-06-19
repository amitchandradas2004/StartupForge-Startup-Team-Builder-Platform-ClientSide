"use client";

import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-full hover:text-indigo-600"
    >
      {theme === "dark" ? (
        <span className="flex items-center gap-2 w-full  p-2">
          {" "}
          <MdSunny /> Light
        </span>
      ) : (
        <span className="flex items-center gap-2 w-full  p-2">
          {" "}
          <FaMoon /> Dark
        </span>
      )}
    </button>
  );
}
{
  /* : */
}
