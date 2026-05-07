import { useMantineColorScheme } from "@mantine/core";

export const useColors = () => {
  const { colorScheme } = useMantineColorScheme();

  const textColor = colorScheme === "dark" ? "#fff" : "#000";

  const hoverBgColor =
    colorScheme === "dark"
      ? "var(--mantine-color-dark-4)"
      : "var(--mantine-color-gray-3)";

  const activeIconColor = "#fff";
  const activeTextColor = "#fff";
  const activeBgColor = "var(--mantine-color-blue-5)";
  const disabledTextColor = "var(--mantine-color-disabled)";

  return {
    textColor,
    hoverBgColor,
    activeIconColor,
    activeTextColor,
    activeBgColor,
    disabledTextColor,
  };
};
