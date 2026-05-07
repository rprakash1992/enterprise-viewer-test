import { ActionIcon, Tooltip } from "@mantine/core";

interface CustomActionIconProps {
  withTooltip?: boolean;
  tooltipLabel?: string;
  icon: any;
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const CustomActionIcon = ({
  withTooltip,
  tooltipLabel = "",
  icon,
  size,
  onClick,
}: CustomActionIconProps) => {
  return withTooltip ? (
    <Tooltip label={tooltipLabel} withArrow>
      <ActionIcon
        variant="subtle"
        color="var(--mantine-color-dimmed)"
        onClick={onClick}
        size={size ?? "md"}
      >
        {icon}
      </ActionIcon>
    </Tooltip>
  ) : (
    <ActionIcon
      variant="subtle"
      color="var(--mantine-color-dimmed)"
      onClick={onClick}
      size={size ?? "md"}
    >
      {icon}
    </ActionIcon>
  );
};
