import { Flex } from "@mantine/core";
import { CustomActionIcon } from "../custom-action-icon/CustomActionIcon";

export interface HeaderIconType {
  iconName: string;
  icon: any;
  onClick: (e: React.MouseEvent) => void;
}

interface HeaderTopIconsProps {
  icons: HeaderIconType[];
}

export const HeaderTopIcons = ({ icons }: HeaderTopIconsProps) => (
  <Flex ml={icons.length > 0 ? 8 : 0}>
    {icons.map((icon) => (
      <Flex key={icon.iconName} h={48} align="center">
        <CustomActionIcon
          icon={<icon.icon />}
          onClick={(e) => icon.onClick(e)}
        />
      </Flex>
    ))}
  </Flex>
);
