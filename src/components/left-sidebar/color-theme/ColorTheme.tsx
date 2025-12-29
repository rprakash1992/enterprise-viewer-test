import { useMantineColorScheme, type MantineColorScheme } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import { ColorThemeHeader } from "./ColorThemeHeader";

interface ColorTheme {
  id: string;
  title: string;
}

const colorThemes: ColorTheme[] = [
  {
    id: "light",
    title: "Light",
  },
  {
    id: "dark",
    title: "Dark",
  },
];

export const ColorTheme = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ColorThemeHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {colorThemes.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.title}
            rightIcon={colorScheme === item.id ? IconCheck : null}
            isActive={colorScheme === item.id}
            onClick={() => setColorScheme(item.id as MantineColorScheme)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};
