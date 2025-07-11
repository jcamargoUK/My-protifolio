"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null during server-side rendering
    // to prevent hydration mismatch.
    return <div style={{width: '106px', height: '56px'}} />;
  }

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <label htmlFor="bb8-toggle-checkbox" className="bb8-toggle">
      <input
        id="bb8-toggle-checkbox"
        className="bb8-toggle__checkbox"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className="bb8-toggle__container">
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__head">
              <div className="bb8__antenna"></div>
              <div className="bb8__antenna"></div>
            </div>
          </div>
          <div className="bb8__body"></div>
        </div>
        <div className="bb8__shadow"></div>
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="bb8-toggle__cloud"></div>
          <div className="artificial__hidden">
            <div className="gomrassen"></div>
            <div className="hermes"></div>
            <div className="chenini"></div>
            <div className="tatto-1"></div>
            <div className="tatto-2"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
            <div className="bb8-toggle__star"></div>
          </div>
        </div>
      </div>
    </label>
  );
}
