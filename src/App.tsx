import { useEffect } from "react";
import Router from "./router/Router";
import { useMantineColorScheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

function App() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const matchesDarkTheme = window?.matchMedia(
    "(prefers-color-scheme: dark)"
  )?.matches;

  useEffect(() => {
    if (matchesDarkTheme) {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }, [matchesDarkTheme]);

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return <Router />;
}

export default App;
