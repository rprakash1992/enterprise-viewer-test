import { Box } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import type { HeaderIconType } from "./HeaderTopIcons";
import { LeftSidebarHeaderTop } from "./LeftSidebarHeaderTop";
import { LeftSidebarHeaderBottom } from "./LeftSidebarHeaderBottom";

interface LeftSidebarHeaderProps {
  withSearch?: boolean;
  withDropdown?: boolean;
  headerLabel: string;
  headerIcons?: HeaderIconType[];
  searchQuery?: string;
  recentSearchItems?: string[];
  selectData?: { label: string; value: string }[];
  selectedData?: string | null;
  setSelectedData?: (val: string | null) => void;
  onGuideClick?: (e: React.MouseEvent) => void;
  setSearchQuery?: (query: string) => void;
}

export const LeftSidebarHeader = ({
  withSearch,
  withDropdown,
  headerLabel,
  headerIcons = [],
  searchQuery = "",
  recentSearchItems = [],
  selectData,
  selectedData,
  setSelectedData,
  onGuideClick = () => {},
  setSearchQuery = () => {},
}: LeftSidebarHeaderProps) => {
  const guideIcon = {
    iconName: "guideIcon",
    icon: IconInfoCircle,
    onClick: onGuideClick,
  };

  return (
    <Box px="lg">
      <LeftSidebarHeaderTop
        withSearch={withSearch}
        headerLabel={headerLabel}
        extraHeaderIcons={[...headerIcons, guideIcon]}
        searchQuery={searchQuery}
        recentSearchItems={recentSearchItems}
        setSearchQuery={setSearchQuery}
      />
      <LeftSidebarHeaderBottom
        withDropdown={withDropdown}
        selectData={selectData}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
    </Box>
  );
};
