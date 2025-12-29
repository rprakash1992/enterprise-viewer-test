import { ActionIcon } from "@mantine/core";

interface CustomThemeIconProps {
  icon: any;
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const CustomThemeIcon = ({
  icon,
  size,
  onClick,
}: CustomThemeIconProps) => {
  return (
    <ActionIcon
      variant="subtle"
      color="var(--mantine-color-dimmed)"
      onClick={onClick}
      size={size ?? "xs"}
    >
      {icon}
    </ActionIcon>
  );
};
